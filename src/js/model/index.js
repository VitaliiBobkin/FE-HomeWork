'use strict'

function TodoItem(title, description) {
  this.title = title;
  this.description = description;
}

const Model = {
  todo: [],

  load() {
    const saved = localStorage.getItem('todo');
    this.todo = saved ? JSON.parse(saved) : [];
  },

  save() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  },

  add(todo) {
    this.todo.unshift(todo);
    this.save();
  },

  clearAll() {
    this.todo = [];
    this.save();
  }
};
