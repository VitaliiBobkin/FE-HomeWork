'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const id = localStorage.getItem('selectedProductID');
  const form = document.getElementById('editForm');
  const product = ProductModel.getById(id);

  if (!product) {
    alert('Product not found');
    location.href = 'list.html';
    return;
  }

  ProductFormView.setFormData(form, product);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const data = ProductFormView.getFormData(form);

    if (!data.title || !data.description || isNaN(data.price) || data.price < 0) {
      alert('Invalid data');
      return;
    }

    ProductModel.update(id, data);
    localStorage.removeItem('selectedProductID');
    location.href = 'list.html';
  });
});
