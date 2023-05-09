FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install
RUN npx prisma db pull

ENTRYPOINT [ "npm", "run", "dev" ]