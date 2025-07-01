'use strict';

const person = { name: "Vitalii"};

// function custom APPLY
Function.prototype.customApply = function (thisArg, args = []) {
  if (args != null && !Array.isArray(args)) {
    throw TypeError("Second argument must be an array");
  }

  // Sets context to a global object if thisArg is null/undefined, otherwise converts to object wrapper
  const context = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg);
  //create a temporary key
  const key = Symbol();

  // assigns function to a temporary property on a context object
  context[key] = this;

  const result = context[key](...args);
  delete context[key];

  return result;
};


function fetchUser(arg, symbol) {
  return `${arg}, ${this.name} ${symbol}`;
}
console.log(fetchUser.customApply(person, ["Hello", "Student!"]));

// function custom BIND
Function.prototype.customBind = function (thisArg, ...boundArgs) {
    const originalFunction = this;

    return function (...args) {
      // Sets context to a global object if thisArg is null/undefined, otherwise converts to object wrapper
      const context = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg);
      //create a temporary key
      const key = Symbol();
      // Restores the original function back to the context object
      context[key] = originalFunction;

      const result = context[key](...boundArgs, ...args);
      delete context[key];

      return result;
    };
};

function greet(greeting) {
  return `${greeting}, ${this.name}`;
}

const boundGreet = greet.customBind(person);
console.log(boundGreet('Ola '));
