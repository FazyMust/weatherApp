const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)
const ui = new UI()

// DOM loaded event listener
document.addEventListener('DOMContentLoaded', getWeather)

// Event listener for button click
document
  .getElementById('w-change-btn')
  .addEventListener('click', handleLocationChange)

// Event listener for Enter key press
document.addEventListener('keypress', (e) => {
  if (
    e.key === 'Enter' &&
    document.getElementById('locModal').classList.contains('show')
  ) {
    handleLocationChange()
  }
})

// Change location event listener
function handleLocationChange() {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  weather.changeLocation(city, country)
  getWeather()

  // Set location in local storage
  storage.setLocationData(city, country)

  const modal = document.getElementById('locModal')
  const bootstrapModal = bootstrap.Modal.getInstance(modal)
  bootstrapModal.hide()
}

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result)
      console.log(result)
    })
    .catch((err) => console.log(err))
}
