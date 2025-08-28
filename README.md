# FE-HomeWork

## Home_Work_49
## Tasks Overview

## TASK: Simulating events via setTimeout with subscription (pub/sub) — without Promises and async/await

Goal: to implement the simplest event bus (Event Bus) in the browser, which can subscribe to events, unsubscribe and emit events asynchronously via setTimeout.

Restrictions:

Browser JavaScript only.
Prohibited: Promises, async/await, third-party libraries.
Allowed: setTimeout, DOM events for manual inspection.
Interface to be implemented:

*on(topic: string, handler: (payload:any) => void): () => void — subscription, returns an unsubscribe function.*
*emit(topic: string, payload?: any, delay = 0): void — asynchronous emission via setTimeout with a specified delay.*
*off(topic: string, handler: Function): void — unsubscribe.*
