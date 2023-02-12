# build stage
FROM node:lts-alpine as build-stage
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app
COPY ./package*.json ./
RUN yarn
COPY . .
RUN NODE_OPTIONS=--openssl-legacy-provider && react-app-rewired build && react-app-rewired export

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]