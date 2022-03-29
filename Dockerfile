# syntax=docker/dockerfile:1
FROM node:14-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "src/index.tsx"]
EXPOSE 3000