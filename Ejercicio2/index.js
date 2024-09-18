// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const newDiv = document.createElement('div')
document.body.insertBefore(newDiv, document.body.firstChild)

const newDivP = document.createElement('div')
const newP = document.createElement('p')
newDivP.appendChild(newP)
document.body.insertBefore(newDivP, newDiv.nextSibling)

const newDivV2 = document.createElement('div')
for (let i = 0; i <= 5; i++) {
  const newPV2 = document.createElement('p')
  newDivV2.appendChild(newPV2)
}
document.body.insertBefore(newDivV2, newDivP.nextSibling)

const newP_Dynamic = document.createElement('p')
newP_Dynamic.textContent = 'Soy dinámico!'
document.body.insertBefore(newP_Dynamic, newDivV2.nextSibling)

const newText = document.querySelector('.fn-insert-here')
newText.textContent = 'Wubba Lubba dub dub'

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const newUl = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const newLi = document.createElement('li')
  newLi.textContent = apps[i]
  newUl.appendChild(newLi)
}
document.body.insertBefore(newUl, newP_Dynamic.nextSibling)

const nodoDelete = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < nodoDelete.length; i++) {
  nodoDelete[i].remove()
}

const textBetweenDivs = document.createElement('p')
textBetweenDivs.textContent = 'Voy en medio!'
const emptyDivs = document.querySelectorAll('div')
for (let i = 0; i < emptyDivs.length; i++) {
  if (emptyDivs[i].textContent === '' && emptyDivs[i].childElementCount === 0 && emptyDivs[i + 1].textContent === '' && emptyDivs[i + 1].childElementCount === 0) {
    document.body.insertBefore(textBetweenDivs, emptyDivs[i + 1])
    break
  }
}
const insertTexts = document.querySelectorAll('.fn-insert-here')
insertTexts.forEach((insertText) => {
  insertText.textContent = 'Voy dentro!'
})
