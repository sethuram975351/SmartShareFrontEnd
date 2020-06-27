export const environment = {
  production: true,
  // @ts-ignore
  gatewayUrl: window.env.gatewayUrl || 'default',
  // @ts-ignore
  oauthUrl: window.env.oauthUrl || 'http://localhost:4200',
  // @ts-ignore
  debug: window.env.debug || false
};
