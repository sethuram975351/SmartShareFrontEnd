# Stage 1: Build an Angular Docker Image
FROM node:10.16.0-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run ng build -- --prod

# Stage 2, use the compiled app, ready for production with Nginx
FROM  nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build /app/dist/SmartShareFrontEnd /usr/share/nginx/html
## Replace default ngnix configuration
COPY ngnix.conf /etc/nginx/conf.d/default.conf

# When the container starts, replace the env.js with values from environment variables
ENTRYPOINT ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/js/env.template.js > /usr/share/nginx/html/assets/js/env.js && exec nginx -g 'daemon off;'"]

