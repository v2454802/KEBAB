/* eslint-disable no-return-assign */
const { formLogin } = document.forms;
formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, password } = e.target;

  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  const user = await response.json();
  if (user.role === 'u') {
    return window.location = 'http://localhost:3000/';
  }
  if (user.role === 'c') {
    return window.location = 'http://localhost:3000/courier';
  }
  alert(user.message);
});
