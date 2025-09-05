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

function getUsersData(userIds) {
  const promises = userIds.map((id) => fetchUserData(id));

  return Promise.allSettled(promises).then((results) => {
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
  });
}

const userIds = [1, 2, 3, 4, 5];

getUsersData(userIds).then((result) => {
  console.log("Success:", result.success);
  console.log("Error:", result.errors);
});
