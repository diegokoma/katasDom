// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Haz Click'
document.body.appendChild(button)
button.addEventListener('click', (event) => {
  console.log(event)
})

const buttonFocus = document.querySelector('.focus')
buttonFocus.addEventListener('focus', (event2) => {
  console.log(event2.target.value)
})

const buttonInput = document.querySelector('.value')
buttonInput.addEventListener('input', (event3) => {
  console.log(event3.target.value)
})
