FROM node:16-alpine

WORKDIR /var/www/html

COPY . .

RUN npm install && npm cache clean --force

EXPOSE 3000 

ENTRYPOINT ["npm", "run", "serve"]