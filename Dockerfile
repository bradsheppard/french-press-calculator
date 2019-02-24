FROM node:8-alpine

RUN npm install -g serve

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]

