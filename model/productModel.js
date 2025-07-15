'use strict';

const ProductModel = {
  getAll: () => JSON.parse(localStorage.getItem('products')) || [],

  saveAll: (products) => {
    localStorage.setItem('products', JSON.stringify(products));
  },

  create: (product) => {
    const products = ProductModel.getAll();
    const newProduct = { id: crypto.randomUUID(), ...product };
    products.unshift(newProduct);
    ProductModel.saveAll(products);
    return newProduct;
  },

  getById: (id) => {
    return ProductModel.getAll().find(product => product.id === id);
  },

  update: (id, updatedData) => {
    const products = ProductModel.getAll();
    const updated = products.map(product => product.id === id ? { ...product, ...updatedData } : product);
    ProductModel.saveAll(updated);
  },

  delete: (id) => {
    const products = ProductModel.getAll().filter(product => product.id !== id);
    ProductModel.saveAll(products);
  }
};
