'use strict'

const View = {
  form: document.getElementById('todoForm'),
  taskListContainer: document.getElementById('todoList'),

  render(todo) {
    const col = document.createElement('div');
    col.className = 'col-4 mt-3';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title">${todo.title}</h5>
            <p class="card-text">${todo.description}</p>
          </div>
        </div>
      </div>
    `;

    this.taskListContainer.appendChild(col);
  },

  renderAll(todo) {
    this.taskListContainer.innerHTML = '';
    todo.forEach(todo => this.render(todo));
  },

  clearForm() {
    this.form.reset();
  }
};

