import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default class {
  async get<T = unknown>(url: string, params = {}) {
    return axios.get<T>(url, { params }).then((response) => response.data);
  }

  async post(url: string, body: object) {
    const response = await axios.post(url, body);

    return response;
  }

  async put(url: string, body: object) {
    const response = await axios.put(url, body);

    return response;
  }

  async delete(url: string, body: object) {
    const response = await axios.delete(url, body);

    return response;
  }
}
