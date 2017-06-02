import SqreenApi from '../lib/sqreenApi';
import Client from '../lib/client';

import {expect} from 'chai';

const key = process.env.SQREEN_API_KEY

describe('Class SqreenApi', () => {
  let sqreenApi;

  beforeEach(() => {
    sqreenApi = new SqreenApi(key);
  });

  it('should instantiate Client', () => {
    expect(sqreenApi._client).to.be.an.instanceof(Client);
    expect(sqreenApi._client).to.have.property('client');
  });

  describe('email', () => {
    it('should return information', () => {
      return sqreenApi.email('ChunkyLover53@aol.com')
        .then((result) => {
          expect(result).to.be.eql({
            email: 'ChunkyLover53@aol.com',
            risk_score: 0,
            is_known_attacker: false,
            high_risk_security_events_count: 0,
            security_events_count: 0,
            is_disposable: false,
            is_email_malformed: false,
            is_email_harmful: false
          })
        });
    });
  });

  describe('ip', () => {
    it('should return information', () => {
      return sqreenApi.ip('8.8.8.8')
        .then((result) => {
          expect(result).to.be.eql({
            ip: '8.8.8.8',
            ip_version: 4,
            risk_score: 5,
            is_known_attacker: false,
            security_events_count: 0,
            high_risk_security_events_count: 0,
            ip_geo: {
              latitude: 37.38600158691406,
              city: 'Mountain View',
              longitude: -122.08380126953125,
              country_code: 'USA'
            },
            is_datacenter: true,
            is_vpn: false,
            is_proxy: false,
            is_private: false,
            is_tor: false
          });
        });
    });

    it('should return error', () => {
      return sqreenApi.ip('invalid')
        .catch((result) => {
          expect(result).to.be.eql({
            code: 400,
            details: 'Invalid IP',
            errno: 400,
            error: 'Invalid request',
            info: '',
            message: 'Validation error occured while trying to parse an ip'
          });
        });
    });
  });
});
