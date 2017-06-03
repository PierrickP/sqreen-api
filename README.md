# Sqreen-api

[![Build Status](https://travis-ci.org/PierrickP/sqreen-api.svg?branch=master)](https://travis-ci.org/PierrickP/sqreen-api) [![npm](https://img.shields.io/npm/dt/sqreen-api.svg)](https://www.npmjs.com/package/sqreen-api) [![npm](https://img.shields.io/npm/v/sqreen-api.svg)](https://www.npmjs.com/package/sqreen-api) [![license](https://img.shields.io/github/license/pierrickp/sqreen-api.svg)](https://github.com/PierrickP/sqreen-api/blob/master/LICENSE.md)

> This module is a just a small helper for the Sqreen API (https://www.sqreen.io/developers.html)
> For the "main" product, see https://www.npmjs.com/package/sqreen

## Install

```shell
npm i sqreen-api --save
```

## Usage

```JavaScript
const SqreenApi = require('sqreen-api');
const sqreenApi = new SqreenApi('YOUR_API_KEY');

// Get details about email
sqreenApi.email('myemail@mail.com')
  .then(() => {
      /*
        {
          email: 'ChunkyLover53@aol.com',
          risk_score: 0,
          is_known_attacker: false,
          high_risk_security_events_count: 0,
          security_events_count: 0,
          is_disposable: false,
          is_email_malformed: false,
          is_email_harmful: false
        }
       */
    });

// Get detais about ip
sqreenApi.ip('8.8.8.8')
  .then(() => {
      /*
        {
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
        }
       */
    });

// ---
```

## In other languages

+ PHP: https://github.com/m1guelpf/php-sqreen-api

## Background

This node.js module is not maintened by Sqreen.io.
@vdeturckheim forced me to do that repo :stuck_out_tongue:
