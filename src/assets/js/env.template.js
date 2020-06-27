(function (window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["gatewayUrl"] = "${GATEWAY_URL}";
  window["env"]["oauthUrl"] = "${OAUTH_URL}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
