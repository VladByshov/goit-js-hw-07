const form = document.querySelector('.login-form');

form.onsubmit = (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();
  if(!email || !pass) {
    alert("All form fields must be filled in");
  }
  console.log({email, pass});
  form.reset();
}

