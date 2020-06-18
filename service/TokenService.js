'use strict';


/**
 * get access token
 *
 * authorisation String HTTP header used to convey the credentials of the client application.  This must match the \"Basic authentication scheme\"  Mandatory if the client application and has a password.  If present, this header takes precedence over the client_id parameter 
 * grant_type String Type of authorisation presented to obtain the access token.
 * code String Corresponds to the value of the authorisation code obtained with the previous call of the /authorize.
 * redirect_uri String Redirect URL of the client application. This must match the URL entered during the authorisation code request.
 * client_id String The identifier of the client application.   This parameter and the Authorization header are mutually exclusive.   It is mandatory if the client application does not have a password. 
 * returns tokenResponse
 **/
exports.tokenPOST = function(authorisation,grant_type,code,redirect_uri,client_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "at-bcc3f013-248a-44d1-8ed7-a51cc2744bea",
  "refresh_token" : 0,
  "refresh_credit" : 7200,
  "scope" : "r_paiements w_paiements",
  "token_type" : "Bearer",
  "expires_in" : "3600",
  "refresh_token_ttl" : "refresh_token_ttl"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

