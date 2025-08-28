'use strict';

class ToDoListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.filter = 'all';

    this.view.bindAdd(this.handleAdd);
    this.view.bindToggle(this.handleToggle);
    this.view.bindDelete(this.handleDelete);
    this.view.bindFilter(this.handleFilter);

    this.model.subscribe(this.updateView);
    this.updateView(this.model.tasks);
  }

  handleAdd = (text) => this.model.addTask(text);
  handleToggle = (id) => this.model.toggleTask(id);
  handleDelete = (id) => this.model.deleteTask(id);
  handleFilter = (filter) => {
    this.filter = filter;
    this.updateView(this.model.tasks);
  };

  updateView = (tasks) => this.view.render(tasks, this.filter);
}
