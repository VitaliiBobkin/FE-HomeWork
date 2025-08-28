'use strict';

class ToDoListModel {
  constructor() {
    this.tasks = [];
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  emit() {
    this.listeners.forEach(l => l(this.tasks));
  }

  addTask(text) {
    const task = { id: Date.now(), text, completed: false };
    this.tasks.push(task);
    this.emit();
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.emit();
    }
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.emit();
  }
}
