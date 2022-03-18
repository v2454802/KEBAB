const { addFood } = document.forms;
addFood.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { addShaurma, addPrice } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ addShaurma: addShaurma.value, addPrice: addPrice.value }),
  });
  if (response.ok) {
    window.location = 'http://localhost:3000/courier';
  }
});

const { delFood } = document.forms;
delFood.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { delShaurma, delPrice } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ delShaurma: delShaurma.value, delPrice: delPrice.value }),
  });
  if (response.ok) {
    window.location = 'http://localhost:3000/courier';
  }
});
