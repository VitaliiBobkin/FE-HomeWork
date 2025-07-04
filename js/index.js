'use strict';

const filterSelect = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

filterSelect.addEventListener('change', () => {
  const selectedCategory = filterSelect.value;

  console.log(selectedCategory);

  cards.forEach(card => {
    const category = card.dataset.category;
    console.log(category);

    switch (selectedCategory) {
      case 'all':
        card.style.display = '';
        break;
      case category:
        card.style.display = '';
        break;
      default:
        card.style.display = 'none';
    }
  });
})
