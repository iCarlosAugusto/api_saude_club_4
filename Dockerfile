FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . /usr/app/

RUN npm install
RUN npx prisma db pull

ENTRYPOINT [ "npm", "run", "dev" ]