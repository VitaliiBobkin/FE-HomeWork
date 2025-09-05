'use strict';

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        reject(new Error(`Failed to fetch user ${userId}`));
      } else {
        resolve({ id: userId, name: `User ${userId}` });
      }
    }, 300);
  });
}

async function getUsersData(userIds) {
  const results = await Promise.allSettled(userIds.map(fetchUserData));

  const success = [];
  const errors = [];

  for (const res of results) {
    if (res.status === "fulfilled") {
      success.push(res.value);
    } else {
      errors.push(res.reason);
    }
  }

  return { success, errors };
}

const userIds = [1, 2, 3, 4, 5];

(async () => {
  const result = await getUsersData(userIds);
  console.log("Success:", result.success);
  console.log("Error:", result.errors);
})();
