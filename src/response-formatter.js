/*
 * moleculer-http-client
 * Copyright (c) 2019 MoleculerJS (https://github.com/moleculerjs/moleculer-http-client)
 * MIT Licensed
 */
"use strict";

const formatter = {
  // Wait for a new (>v9.6.0) Got release
  // https://github.com/sindresorhus/got/pull/704
  body: response => {
    const { json } = response.request.gotOptions;
    if (json === true) {
      try {
        return JSON.parse(response.body);
        // return req.body;
      } catch (error) {
        throw error;
      }
    }
    return response.body;
  },
  headers: response => {
    return response.headers;
  },
  status: response => response.statusCode,
  raw: response => response
};

const formatOptions = Object.keys(formatter);

module.exports = { formatter, formatOptions };
