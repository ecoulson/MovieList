FROM node:8.7.0-alpine
WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

COPY . .

RUN cd ./client && npm install && npm run build && cd ..

CMD [ "npm", "start" ]