class Api {
  constructor(base_url) {
    this.base_url = base_url;
  }

  getDistricts(level) {
    return fetch(`${this.base_url}/districts?level=${level}`)
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

  getApartments() {
    return fetch(`${this.base_url}/apartments`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getRooms() {
    return fetch(`${this.base_url}/rooms`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }
}

export default Api;
