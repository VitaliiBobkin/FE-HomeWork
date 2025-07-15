'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const products = ProductModel.getAll();
  ProductListView.render(products);
});
