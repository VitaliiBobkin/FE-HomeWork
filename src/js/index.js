'use strict';

class Navigation {
  constructor(navSelector, contentSelector) {
    this.nav = document.querySelector(navSelector);
    this.content = document.querySelector(contentSelector);

    if (!this.nav) throw new Error(`Nav "${navSelector}" not found`);
    if (!this.content) throw new Error(`Content "${contentSelector}" not found`);

    this.links = Array.from(this.nav.querySelectorAll('a'));

    this.bindEvents();
    this.loadInitialPage();

    window.addEventListener('popstate', (e) => {
      const url = e.state?.url || this.links[0].getAttribute('href');
      this.loadPage(url, false);
    });
  }

  bindEvents() {
    this.nav.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a || !this.links.includes(a)) return;

      e.preventDefault();
      const href = a.getAttribute('href');
      this.loadPage(href, true);
    });
  }

  setActive(href) {
    this.links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === href);
    });
  }

  loadInitialPage() {

    const initialHref = this.links[0].getAttribute('href');
    const stateUrl = history.state?.url || initialHref;
    this.loadPage(stateUrl, false);
  }

  loadPage(href, addToHistory) {
    this.setActive(href);

    fetch(href)
      .then(res => {
        if (!res.ok) throw new Error('Page not found');
        return res.text();
      })
      .then(html => {
        this.content.innerHTML = html;
        if (addToHistory) {
          history.pushState({ url: href }, '', location.pathname);
        } else {
          history.replaceState({ url: href }, '', location.pathname);
        }
      })
      .catch(() => {
        this.content.innerHTML = `<h1 style="color:red;">404 - Page Not Found</h1>`;
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navigation('nav', '#content');
});
