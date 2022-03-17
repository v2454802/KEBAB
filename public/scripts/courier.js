const { addForm } = document.forms;
addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { shaurma, address } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shaurma: shaurma.value, address: address.value }),
  });
});

const { delForm } = document.forms;
delForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { shaurma, address } = e.target;
  const response = await fetch('/courier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shaurma: shaurma.value, address: address.value }),
  });
});
