'use strict'

class HistoryTracker {
  constructor() {
    this.historyList = [];

    window.addEventListener("popstate", (event) => {
      console.log("popstate event:", event.state);
      console.log("Current history list:", this.historyList);
    });
  }

  push(url) {
    history.pushState({ url }, "", url);
    this.historyList.push(url);
    console.log(`✅ Added: ${url}`);
  }

  back() {
    history.back();
  }
}

const tracker = new HistoryTracker();

tracker.push("/home");
tracker.push("/about");
tracker.push("/contact");

setTimeout(() => tracker.back(), 2000);

