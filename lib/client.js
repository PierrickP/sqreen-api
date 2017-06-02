/* @flow */
import axios from 'axios';

const SQREEN_BASEURL = 'https://api.sqreen.io/v1/';

/**
 * Client
 *
 * @param  {string}  key  Sqreen API key
 *
 */
class Client {
  client: Axios;

  constructor(key: string) {
    this.client = axios.create({
      baseURL: SQREEN_BASEURL,
      headers: {
        'X-API-Key': key
      }
    });
  }

  /**
   * Get
   *
   * @param  {string} path
   * @param  {string} value
   */
  get(path: string, value: string): Promise<string | Object> {
    return this.client.get(`${path}/${value}`)
      .then(resp => resp.data)
      .catch(error => {
        if (error.response) {
          return error.response.data;
        } else if (error.request) {
          return error.request;
        }

        return error;
      });
  }
}

export default Client;
