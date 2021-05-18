import axios from "axios";

class HttpService {
  constructor() {
    this.baseUrl = "http://localhost:5000/api/v1";
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  get(url, config = null) {
    return this.axios.get(url, config);
  }

  post(url, params, config = null) {
    return this.axios.post(url, params, config);
  }
}

export default HttpService;
