(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["gatewayUrl"] = "${GATEWAY_URL}";
  window["env"]["frontendPort"] = "${FRONTEND_PORT}";
  window["env"]["debug"] = "${DEBUG}";
})(this);
