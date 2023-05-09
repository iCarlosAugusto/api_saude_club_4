FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . /usr/app/

RUN npm install
RUN npx prisma migrate dev

ENTRYPOINT [ "npm", "run", "dev" ]