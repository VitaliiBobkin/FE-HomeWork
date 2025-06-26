'use strict';

const fs = require('fs');
const path = require('path');
const PATH_JSON_USER = path.join(__dirname, 'users.json');

const processUsers = () => {
  try {
    const data = fs.readFileSync(PATH_JSON_USER, 'utf8');
    const usersArray = JSON.parse(data);

    let totalBalance = 0;
    const phones = [];
    const usersMap = {};

    usersArray.forEach(({ phone, balance, ...remainder }) => {
      if (!phone || !balance) return;

      const numericBalance = parseFloat(balance.replace(/[$,]/g, ''));
      if (isNaN(numericBalance)) return;

      totalBalance += numericBalance;
      if (numericBalance > 2000) {
          phones.push(phone);
      }

      usersMap[phone] = { balance: numericBalance, ...remainder };
    });

    console.log(`number of phone with balance over $2000 : ${phones.join(', ')}`);
    console.log( `Total balance all users : $${totalBalance.toFixed(2)}`);

    return usersMap;
  } catch (error) {
    console.error('Error processing users:', error.message);
  }
};

processUsers();
