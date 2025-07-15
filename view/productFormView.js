'use strict';

const ProductFormView = {
  getFormData: (form) => {
    return {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      price: parseFloat(form.price.value)
    };
  },

  setFormData: (form, product) => {
    form.title.value = product.title || '';
    form.description.value = product.description || '';
    form.price.value = product.price ?? '';
  }
};
