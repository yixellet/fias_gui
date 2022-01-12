class Api {
  constructor(base_url) {
    this.base_url = base_url;
  }

  liveSearch(string, mode) {
    return fetch(`${this.base_url}/livesearch?string=${string}&mode=${mode}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getChildren(objectid, mode) {
    return fetch(`${this.base_url}/children?objectid=${objectid}&mode=${mode}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getHouseChildren(objectid) {
    return fetch(`${this.base_url}/housechildren?objectid=${objectid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getRooms(objectid) {
    return fetch(`${this.base_url}/rooms?objectid=${objectid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getAdmDistrictDetails(objectid) {
    return fetch(`${this.base_url}/admdistrDetails?code=${objectid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getMunDistrictDetails(objectid) {
    return fetch(`${this.base_url}/mundistrDetails?code=${objectid}`)
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
}

export default Api;
