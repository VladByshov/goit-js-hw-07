const input = document.querySelector('#name-input');
input.onkeyup = (event) => {
    const value = event.target.value.trim();
    printName(!value ? 'Anonymous': value);
}
const printName = (name) =>{
  const span = document.querySelector('#name-output')
  span.innerText = name;
}
