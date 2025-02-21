# Dockerfile-data-service

FROM node:18

WORKDIR /home/node/app

COPY ./package*.json ./
RUN npm install

COPY . .

CMD npm run typechain && npm run start 