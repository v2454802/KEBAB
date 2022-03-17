const { regForm } = document.forms;

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log(regForm);
  const {
    login, email, pass, roleId,
  } = e.target;

  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login.value, email: email.value, pass: pass.value, role: roleId.value,
    }),
  });
  if (response.ok) {
    window.location = 'http://localhost:3000/';
  }
});
