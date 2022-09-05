FROM node:16-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run start



CMD ["node", "dist/App/start.ts"]




