FROM node:18

ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION

RUN mkdir app

COPY . /app

WORKDIR /app

RUN npm install


CMD ["npm","start"]

