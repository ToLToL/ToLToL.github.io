'use strict';

var utils = require('../utils/writer.js');
var Authorization = require('../service/AuthorizationService');

module.exports.authorizeGET = function authorizeGET (req, res, next, response_type, client_id, redirect_uri, scope, state, response_mode) {
  Authorization.authorizeGET(response_type, client_id, redirect_uri, scope, state, response_mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create = function create (req, res, next, body, response_type, client_id, redirect_uri, scope, state, response_mode) {
  Authorization.create(body, response_type, client_id, redirect_uri, scope, state, response_mode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
