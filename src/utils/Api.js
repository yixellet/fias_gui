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

  getChildren(objectid, mode, level) {
    return fetch(`${this.base_url}/children?objectid=${objectid}&mode=${mode}&level=${level}`)
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

  getParents(objectid, mode, level) {
    return fetch(`${this.base_url}/parents?objectid=${objectid}&mode=${mode}&level=${level}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  search(string, mode) {
    return fetch(`${this.base_url}/search?string=${string}&mode=${mode}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }
}

export default Api;
