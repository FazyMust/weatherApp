class Weather {
  constructor(city, country) {
    // openweathermap
    this.apiKey = '7ad843c4807d44f8d45839000d103667'
    this.apiURL = 'https://api.openweathermap.org/data/2.5/weather'
    this.city = city
    this.country = country
  }

  async getWeather() {
    const response = await fetch(
      `${this.apiURL}?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`
    )
    const responseData = await response.json()

    return responseData
  }

  // Change the Weather Location
  changeLocation(city, country) {
    this.city = city
    this.country = country
  }
}

// https://api.openweathermap.org/data/2.5/weather?q=London,UK&units=metric&appid=7ad843c4807d44f8d45839000d103667
