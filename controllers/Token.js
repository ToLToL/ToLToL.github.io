'use strict';

var utils = require('../utils/writer.js');
var Token = require('../service/TokenService');

module.exports.tokenPOST = function tokenPOST (req, res, next, authorisation, grant_type, code, redirect_uri, client_id) {
  Token.tokenPOST(authorisation, grant_type, code, redirect_uri, client_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
