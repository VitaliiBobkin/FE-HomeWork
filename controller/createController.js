'use strict';

document.getElementById('productForm').addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const form = e.target;
  const data = ProductFormView.getFormData(form);

  if (!data.title || !data.description || isNaN(data.price) || data.price < 0) {
    alert('Please fill out the form correctly.');
    return;
  }

  ProductModel.create(data);
  location.href = 'list.html';
});
