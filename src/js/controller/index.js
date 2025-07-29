'use strict'

const Controller = {
  init() {
    Model.load();
    View.renderAll(Model.todo);

    View.form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const title = View.form.elements.title.value.trim();
      const description = View.form.description.value.trim();

      if (!title || !description) return alert('Fill in all fields');

      const todo = new TodoItem(title, description);
      Model.add(todo);
      View.render(todo);
      View.clearForm();
    });

    document.querySelector('.remove-all').addEventListener('click', () => {
      if (confirm('Delete all tasks?')) {
        Model.clearAll();
        location.reload();
      }
    });
  }
};
