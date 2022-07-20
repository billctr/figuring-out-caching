FROM node:14 as build

WORKDIR /application

ARG VERSION
ENV VERSION=$VERSION

RUN npm install git+https://github.com/billctr/figuring-out-caching.git#$VERSION

FROM nginx:1.19.2-alpine

ARG SOURCE_MAP_SECRET
ENV SOURCE_MAP_SECRET=$SOURCE_MAP_SECRET

RUN ["apk", "update"]
RUN ["apk", "add", "vim"]

COPY --from=build /application/node_modules/figuring-out-caching/dist /usr/share/nginx/html

COPY ./config/nginx/default.conf /nginx.conf.template
CMD ["/bin/sh" , "-c" , "envsubst '$SOURCE_MAP_SECRET' < /nginx.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

EXPOSE 80