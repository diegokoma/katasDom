// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const countryList = document.createElement('ul')
document.body.appendChild(countryList)

countries.forEach((countryName) => {
  const countryItem = document.createElement('li')
  countryItem.textContent = countryName
  countryList.appendChild(countryItem)
})

const deleteClass = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < deleteClass.length; i++) {
  deleteClass[i].remove()
}
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']

const carGarage = document.createElement('ul')
const carPlace = document.querySelector('[data-function="printHere"]')
carPlace.appendChild(carGarage)
cars.forEach((carName) => {
  const carItem = document.createElement('li')
  carItem.textContent = carName
  carGarage.appendChild(carItem)
})

const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const randomElements = document.createElement('div')
document.body.appendChild(randomElements)
const countryDivs = []
countries2.forEach((element) => {
  const countryPlace = document.createElement('div')
  const tittle = document.createElement('h4')
  const placeImg = document.createElement('img')
  const deletePersonalButton = document.createElement('button')
  deletePersonalButton.textContent = 'Borrado individual'
  tittle.textContent = element.title
  placeImg.src = element.imgUrl
  randomElements.appendChild(countryPlace)
  randomElements.appendChild(deletePersonalButton)
  countryPlace.appendChild(tittle)
  countryPlace.appendChild(placeImg)
  countryDivs.push(countryPlace)
  deletePersonalButton.addEventListener('click', () => {
    countryPlace.remove()
    deletePersonalButton.remove()
  })
})

const deleteButton = document.createElement('button')
deleteButton.textContent = 'Borrar div'
document.body.appendChild(deleteButton)
deleteButton.addEventListener('click', () => {
  if (countryDivs.length > 0) {
    const lastChild = countryDivs.pop()
    lastChild.remove()

    if (countryDivs.length === 0) {
      deleteButton.remove()
    }
  }
})
