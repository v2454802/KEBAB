const { addFood } = document.forms;
// console.log(addFood);
addFood.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { addShaurma, addPrice } = e.target;
  // console.log(addShaurma.value, addPrice.value);
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shaurma: addShaurma.value, price: addPrice.value }),
  });
  if (response.ok) {
    console.log('wadadwadwadad');
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
    body: JSON.stringify({ shaurma: delShaurma.value, price: delPrice.value }),
  });
});
