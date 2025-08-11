# FE-HomeWork

## Home_Work_43
## Tasks Overview

## Data structures

1. Map: Object statistics by complex keys
   Implement a function groupByCategory(items) that takes an array of items, where each item has a complex object as a category, and groups the items by these categories.
2. Set: Detecting unique objects without reprocessing
   Create a function filterUniqueByReference(arr) that returns an array of only unique objects by reference.
3. WeakMap: Attaching metadata to objects without leaking memory
   Create createMetadataStorage(), which allows you to "attach" additional information to any object without changing the object itself. These objects can disappear from memory - and the metadata will automatically disappear too.
   In JavaScript, it is not safe to add a field to a third-party object unless you created it.
   But with WeakMap we can store additional information externally without touching the object itself.
4. WeakSet: Tracking already processed objects
   Create an ObjectTracker class that allows you to check whether a certain object has already been "marked" or processed. The class has the methods:
   mark(obj) — mark the object as processed
   wasProcessed(obj) → true | false — whether the object has already been processed

**Context: In many scenarios (e.g. graph traversal, DOM tree traversal, deep validation) you need to know if this object has already been processed so as not to repeat the action.**
