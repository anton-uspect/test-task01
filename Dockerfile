# build
FROM node:lts-buster as react-build
WORKDIR /opt
COPY ./package.json ./yarn.lock ./
RUN yarn
ADD . .
RUN yarn build

# production
FROM nginx:1.20.1-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /opt/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
