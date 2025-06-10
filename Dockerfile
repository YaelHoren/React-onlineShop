FROM node:14-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5175

CMD ["serve", "-s", "build", "-l", "5175"]