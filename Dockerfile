FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install
RUN npx prisma generate

ENTRYPOINT [ "npm", "run", "dev" ]