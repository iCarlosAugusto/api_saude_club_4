FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx prisma migrate dev

ENTRYPOINT [ "npm", "run", "dev" ]