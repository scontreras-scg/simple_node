FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn install --network-timeout 600000
CMD ["yarn", "test"]