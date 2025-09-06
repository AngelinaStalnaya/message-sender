FROM node:24-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["npm", "start"]
