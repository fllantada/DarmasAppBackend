FROM node:16 as backend

WORKDIR .

COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4000

RUN npm start


