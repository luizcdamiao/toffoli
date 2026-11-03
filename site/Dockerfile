FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Em produção: --build-arg SITE_URL=https://dominio-oficial --build-arg SITE_ENV=production
ARG SITE_URL=""
ARG SITE_ENV="staging"
ENV SITE_URL=$SITE_URL SITE_ENV=$SITE_ENV
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV HOST=0.0.0.0 PORT=4321 NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json ./
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
