// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.

// const albums = [
//   "De Mysteriis Dom Sathanas",
//   "Reign of Blood",
//   "Ride the Lightning",
//   "Painkiller",
//   "Iron Fist",
// ];

const albums = ['De Mysteriis Dom Sathanas', 'Reign of Blood', 'Ride the Lightning', 'Painkiller', 'Iron Fist']

const albumsBox = document.createElement('ul')
document.body.appendChild(albumsBox)
albums.forEach((album) => {
  const songs = document.createElement('li')
  songs.textContent = album
  albumsBox.appendChild(songs)
})
