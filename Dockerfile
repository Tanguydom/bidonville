# Étape 1 : build de l'application React
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]