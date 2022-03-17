const { regForm } = document.forms;
regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const {
    login, email, pass, roleId,
  } = e.target;
  // console.log(regForm.roleId.value);
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login.value, email: email.value, pass: pass.value, role: roleId.value,
    }),
  });
});
