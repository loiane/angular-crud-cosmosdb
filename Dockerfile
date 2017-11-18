# Angular App
FROM loiane/angular-cli as angular-app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Node server
FROM node:6.11-alpine as express-server
WORKDIR /app
COPY /src/server /app
RUN npm install --production --silent

# Final image
FROM node:6.11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular-app /app/dist /usr/src/app/dist
EXPOSE 3001
CMD [ "node", "index.js" ]