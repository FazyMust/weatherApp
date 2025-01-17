class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.dewpoint = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather) {
    this.location.textContent = weather.name

    this.desc.textContent = weather.weather[0].description

    this.string.textContent = `${weather.main.temp.toFixed(2)}°C / ${(
      (weather.main.temp * 9) / 5 +
      32
    ).toFixed(2)}°F`

    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )

    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`

    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed(
      2
    )}°C / ${((weather.main.feels_like * 9) / 5 + 32).toFixed(2)}°F`
    

    this.dewpoint.textContent = `Dew Point: ${
      weather.main.dew_point
        ? weather.main.dew_point.toFixed(2) +
          '°C / ' +
          ((weather.main.dew_point * 9) / 5 + 32).toFixed(2) +
          '°F'
        : 'N/A'
    }`

    this.wind.textContent = `Wind Speed: ${(weather.wind.speed * 2.237).toFixed(
      2
    )} mph`
  }
}
