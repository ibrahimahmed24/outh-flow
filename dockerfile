FROM node:20 AS base

# ------------------ Development ------------------
FROM base AS development
WORKDIR /app

COPY package*.json ./

# install pnpm + nest cli
RUN npm install -g pnpm
RUN npm install -g @nestjs/cli

RUN pnpm install

COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "dev"]

# ------------------ Production ------------------
FROM base AS production
WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm
RUN npm install -g @nestjs/cli

RUN pnpm install --prod

COPY . .

EXPOSE 3000
CMD ["pnpm", "start"]
