'use strict';

const createResultTemplate = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'text-muted', 'text-center');
        li.textContent = 'No contacts found.';
        return [li];
    }

    return data.map(user => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
      <div>
        <b>${user.firstName} ${user.lastName}</b><br>
        <small>${user.phone || ''}</small>
      </div>
      <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">Delete</button>
    `;
        return li;
    });
};

window.createResultTemplate = createResultTemplate;



