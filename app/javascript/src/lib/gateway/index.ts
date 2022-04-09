import axios from "axios";

export default class {
  constructor() {}

  async get(url: string, params={}) {
    const response = await axios.get(url, {params});

    return response
  }

  async post(url: string, body: object) {
    const response = await axios.post(url, body);

    return response
  }

  async put(url: string, body: object) {
    const response = await axios.put(url, body);

    return response
  }

  async delete(url: string, body: object) {
    const response = await axios.delete(url, body);

    return response
  }
}
