const { formLogin } = document.forms;
formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, pass } = e.target;
  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, pass: pass.value }),
  });
});
