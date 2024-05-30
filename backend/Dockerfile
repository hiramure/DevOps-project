FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 8070

CMD ["npm", "start"]

