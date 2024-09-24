// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const tierraMedia = document.createElement('ul')
const map = document.querySelector('[data-function="printHere"]')
map.appendChild(tierraMedia)
places.forEach((place) => {
  const areas = document.createElement('li')
  areas.textContent = place
  tierraMedia.appendChild(areas)
})
