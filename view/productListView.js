'use strict';

const ProductListView = {
  render: (products) => {
    const tbody = document.getElementById('productList');
    tbody.innerHTML = '';

    if (products.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center">No products</td></tr>';
      return;
    }

    products.forEach(product => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price.toFixed(2)} $</td>
        <td>${product.description}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" data-edit-id="${product.id}">Edit</button>
          <button class="btn btn-danger btn-sm" data-delete-id="${product.id}">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Add listeners
    tbody.querySelectorAll('[data-edit-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        localStorage.setItem('selectedProductID', btn.dataset.editId);
        location.href = 'edit.html';
      });
    });

    tbody.querySelectorAll('[data-delete-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        ProductModel.delete(btn.dataset.deleteId);
        location.reload();
      });
    });
  }
};
