FROM node

WORKDIR /usr/app

COPY package.json ./

COPY . .

RUN npm install
RUN npx prisma generate
RUN npx prisma db push

ENTRYPOINT [ "npm", "run", "dev" ]