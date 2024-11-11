FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080 50051

CMD ["node", "src/app.js"]