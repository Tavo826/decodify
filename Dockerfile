FROM node:18-alpine

# Create app directory
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "app.js"]