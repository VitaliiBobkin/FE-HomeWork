'use strict';

class ToDoView {
  constructor() {
    this.input = document.getElementById('taskInput');
    this.addBtn = document.getElementById('addBtn');
    this.taskList = document.getElementById('taskList');
    this.completedCount = document.getElementById('completedCount');
    this.activeCount = document.getElementById('activeCount');
    this.filterButtons = document.querySelectorAll('[data-filter]');
  }

  bindAdd(handler) {
    this.addBtn.addEventListener('click', () => {
      if (this.input.value.trim()) {
        handler(this.input.value.trim());
        this.input.value = '';
      }
    });

    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && this.input.value.trim()) {
        handler(this.input.value.trim());
        this.input.value = '';
      }
    });
  }

  bindToggle(handler) {
    this.taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('toggle-btn')) {
        handler(Number(e.target.dataset.id));
      }
    });
  }

  bindDelete(handler) {
    this.taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        handler(Number(e.target.dataset.id));
      }
    });
  }

  bindFilter(handler) {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        handler(btn.dataset.filter);
      });
    });
  }

  render(tasks, filter) {
    this.taskList.innerHTML = '';

    let filteredTasks = tasks;
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.completed);
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';

      const span = document.createElement('span');
      span.textContent = task.text;
      if (task.completed) {
        span.classList.add('text-decoration-line-through', 'text-muted');
      }

      const btnGroup = document.createElement('div');

      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = task.completed ? 'Undo' : 'Done';
      toggleBtn.className = 'btn btn-sm btn-success me-2 toggle-btn';
      toggleBtn.dataset.id = task.id;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'btn btn-sm btn-danger delete-btn';
      deleteBtn.dataset.id = task.id;

      btnGroup.append(toggleBtn, deleteBtn);
      li.append(span, btnGroup);
      this.taskList.appendChild(li);
    });

    this.completedCount.textContent = tasks.filter(t => t.completed).length;
    this.activeCount.textContent = tasks.filter(t => !t.completed).length;
  }
}
