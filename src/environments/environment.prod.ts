export const environment = {
  production: true,
  // @ts-ignore
  gatewayUrl: window.env.gatewayUrl || 'default',
  // @ts-ignore
  frontendPort: window.env.frontendPort || 'default',
  // @ts-ignore
  debug: window.env.debug || false
};
