class Storage {
  constructor() {
    this.city
    this.country
    this.defaultCity = 'Faisalabad'
    this.defaultCountry = 'PK'
  }

  getLocationData() {
    this.city = localStorage.getItem('city') || this.defaultCity
    this.country = localStorage.getItem('country') || this.defaultCountry
    return { city: this.city, country: this.country }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city)
    localStorage.setItem('country', country)
  }
}