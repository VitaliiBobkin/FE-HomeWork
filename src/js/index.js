'use strict'
/*
* Map: Object statistics by complex keys
*/

function groupByCategory(items) {
  const map = new Map();

  for (const item of items) {
    const category = item.category;

    if (!map.has(category)) {
      map.set(category, []);
    }
    map.get(category).push(item);
  }
  return map;
}

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
  { name: 'Laptop', category: electronics },
  { name: 'Phone', category: electronics },
  { name: 'Book A', category: books },
];

const result = groupByCategory(items);

result.forEach((items, category) => {
  console.log(`Category: ${category.name}`);
  items.forEach(item => {
    console.log(` - ${item.name}`);
  });
});

/*
* Set: Detecting unique objects without reprocessing
*/

const filterUniqueByReference = (arr) =>{
  return [...new Set(arr)];
}

const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const resultSet = filterUniqueByReference(input);

console.log("Uniq objects:");
resultSet.forEach((object, index) => {
  console.log(`${index + 1}:`, object);
});


/*
* WeakMap: Binding metadata to objects without memory leaks
*/

function createMetadataStorage() {
  const metadataMap = new WeakMap();

  return {
    setMetadata(obj, metadata) {
      if (typeof obj !== 'object' || obj === null) {
        throw new Error('Metadata can only be attached to objects.');
      }
      metadataMap.set(obj, metadata);
    },

    getMetadata(obj) {
      return metadataMap.get(obj);
    },

    hasMetadata(obj) {
      return metadataMap.has(obj);
    }
  };
}


const storage = createMetadataStorage();

const user1 = { name: 'John' };
const user2 = { name: 'Jane' };

storage.setMetadata(user1, { tag: 'important', access: 'admin' });
storage.setMetadata(user2, { tag: 'new', access: 'user' });

console.log(storage.getMetadata(user1));
console.log(storage.getMetadata(user2));
console.log(storage.hasMetadata(user1));

/*
* WeakSet: Tracking already processed objects
*/

class ObjectTracker {
  constructor() {
    this.processedObjects = new WeakSet();
  }
  mark(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Only objects can be tracked.');
    }
    this.processedObjects.add(obj);
  }

  wasProcessed(obj) {
    return this.processedObjects.has(obj);
  }
}
const tracker = new ObjectTracker();

const obj = { name: "A" };

console.log(tracker.wasProcessed(obj));
tracker.mark(obj);
console.log(tracker.wasProcessed(obj));
