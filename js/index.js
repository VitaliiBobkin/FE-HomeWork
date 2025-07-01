'use strict';

const data = {
  id: 1, name: "root", meta: { id: 2, parent: { id: 3, name: "leaf", }, },
  array: [{ id: 4 }, { name: "node", children: [{ id: 5 }] },],
};

function findValuesByKey(obj, targetKey) {
  const result = [];

  function search(data) {
    if (Array.isArray(data)) {
      data.forEach(search);
    } else if (data && typeof data === "object") {
      for (const key in data) {
        if (key === targetKey) result.push(data[key]);
        search(data[key]);
      }
    }
  }

  search(obj);
  return result;
}

console.log(findValuesByKey(data, "id"));
