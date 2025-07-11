'use strict';

const getUsers = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  return Array.isArray(users) ? users : [];
};

const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const deleteUser = (id) => {
  const updatedUsers = getUsers().filter(user => String(user.id) !== String(id));
  saveUsers(updatedUsers);
  renderUserList();
};

window.deleteUser = deleteUser;
window.saveUsers = saveUsers;

const renderUserList = () => {
  const container = document.querySelector('[data-form-values]');
  if (!container) return;

  container.innerHTML = '';

  const users = getUsers();
  const resultList = window.createResultTemplate(users);

  resultList.forEach(li => container.appendChild(li));
};

window.renderUserList = renderUserList;

document.addEventListener('DOMContentLoaded', renderUserList);
