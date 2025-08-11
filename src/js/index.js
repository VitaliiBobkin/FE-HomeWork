'use strict';

class URLParser {
  constructor(fullUrl) {
    this.url = new URL(fullUrl);
  }

  get protocol() {
    return this.url.protocol;
  }

  get hostname() {
    return this.url.hostname;
  }

  get path() {
    return this.url.pathname;
  }

  get queryParams() {
    const params = {};
    this.url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }
}


const parser = new URLParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
