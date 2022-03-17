const {formReg} = document.forms
formReg.addEventListener('submit', async (e) => {
  e.preventDefault()
  const response = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({login: login.value, email: email.value, pass: pass.value, role: roleId.value})
  })
  if(response.ok) {
    window.location = 'hhtp://localhost:3000/signup'
  }
})
