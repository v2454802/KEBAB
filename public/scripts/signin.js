const {formSign} = document.forms
formSign.addEventListener('submit', (e) => {
  e.preventDefault()
  const response = await fetch('/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email.value, pass: pass.value})
  })
})
