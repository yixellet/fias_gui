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

  getObject(objectid) {
    return fetch(`${this.base_url}/object?objectid=${objectid}`)
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

  getLevels() {
    return fetch(`${this.base_url}/levels`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getParams(objectid) {
    return fetch(`${this.base_url}/params?objectid=${objectid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getGeometry(objectid, level) {
    return fetch(`${this.base_url}/geometry?objectid=${objectid}&level=${level}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  getParents(objectid, mode) {
    return fetch(`${this.base_url}/parents?objectid=${objectid}&mode=${mode}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }
}

export default Api;
