const { addFood } = document.forms;
addFood.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { addShaurma, addAdress } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shaurma: addShaurma.value, address: addAdress.value }),
  });
});

const { delFood } = document.forms;
delFood.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { delShaurma, delAdress } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shaurma: delShaurma.value, address: delAdress.value }),
  });
});
