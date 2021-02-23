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
}

export default Api;
