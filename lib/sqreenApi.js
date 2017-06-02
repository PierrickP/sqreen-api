/* @flow */
import Client from './client';

/**
 * SqreenApi
 *
 * @param  {string}  key  Sqreen API key
 *
 */
class SqreenApi {
  _client: Client;

  constructor(key: string) {
    this._client = new Client(key);
  }

  ip(ip: string) {
    return this._client.get('ips', ip);
  }

  email(email: string) {
    return this._client.get('emails', email);
  }
}

export default SqreenApi;
