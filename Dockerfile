FROM node:18-buster
WORKDIR /app 
COPY . /app 
RUN yarn install 
CMD ["yarn", "ui:start"]
