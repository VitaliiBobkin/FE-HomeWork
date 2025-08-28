'use strict';

function createBus() {
  const topics = Object.create(null); // { [topic]: Set<Function> }

  // Subscribe to a topic
  function on(topic, handler) {
    if (!topics[topic]) topics[topic] = new Set();
    topics[topic].add(handler);

    // Return an unsubscribe function
    return function unsubscribe() {
      off(topic, handler);
      console.log(`Handler unsubscribed from "${topic}"`);
    };
  }

  // Remove a specific handler from a topic
  function off(topic, handler) {
    const subscribers = topics[topic];
    if (!subscribers) return;

    subscribers.delete(handler);
    console.log(`Handler removed from "${topic}"`);
    if (subscribers.size === 0) delete topics[topic];
  }

  // Emit an event asynchronously
  function emit(topic, payload, delay = 0) {
    const subscribers = topics[topic];
    if (!subscribers) return;

    const handlersSnapshot = Array.from(subscribers);

    setTimeout(() => {
      handlersSnapshot.forEach(handler => {
        if (subscribers.has(handler)) {
          try {
            handler(payload);
          } catch (err) {
            console.error('Handler error:', err);
          }
        }
      });
    }, delay);
  }

  return { on, off, emit };
}

// Test the bus
const bus = createBus();

// 1) Asynchronous execution
bus.on('tick', (payload) => console.log('tick:', payload));
bus.emit('tick', { step: 1 }, 0);
console.log('after schedule');
// "after schedule" appears first, then "tick: { step: 1 }"

// 2) Event chain
bus.on('tick', (payload) => {
  console.log('handler step:', payload.step);
  if (payload.step === 1) {
    bus.emit('tick', { step: 2 }, 0);
  }
});
bus.emit('tick', { step: 1 }, 0);

// 3) Unsubscribe inside handler using off explicitly
function newsHandler(payload) {
  console.log('news:', payload);
  bus.off('news', newsHandler); // Using off here
}
bus.on('news', newsHandler);
bus.emit('news', 'A', 0);
bus.emit('news', 'B', 0); // Only 'A' will trigger the handler

// 4) Multiple subscribers
bus.on('event', (payload) => console.log('Handler1', payload));
bus.on('event', (payload) => console.log('Handler2', payload));
bus.on('event', (payload) => console.log('Handler3', payload));
bus.emit('event', 'working', 0);
