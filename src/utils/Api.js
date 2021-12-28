class Api {
  constructor(base_url) {
    this.base_url = base_url;
  }

  liveSearch(string) {
    return fetch(`${this.base_url}/livesearch?string=${string}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getAdmDistricts() {
    return fetch(`${this.base_url}/admdistricts`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getMunDistricts() {
    return fetch(`${this.base_url}/mundistricts`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getMunStructures() {
    return fetch(`${this.base_url}/munstructures`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getCities() {
    return fetch(`${this.base_url}/cities`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getSettles() {
    return fetch(`${this.base_url}/settlements`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getTerritories() {
    return fetch(`${this.base_url}/territories`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getStreets() {
    return fetch(`${this.base_url}/streets`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getLevels() {
    return fetch(`${this.base_url}/levels`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getSteads() {
    return fetch(`${this.base_url}/steads`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getHouses() {
    return fetch(`${this.base_url}/houses`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }
}

export default Api;
