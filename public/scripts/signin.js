
const { formLogin } = document.forms;
formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { email, password } = e.target;
  console.log('========');
  console.log(email.value);

  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  if (response.role === 'u') {
    window.location = 'http://localhost:3000/';
  } else {
    window.location = 'http://localhost:3000/courier';
  }
});
