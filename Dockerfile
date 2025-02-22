FROM node:20.8.0-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*
RUN corepack enable

FROM base AS build
WORKDIR /usr/src/app
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm --filter superligfrbackend --prod deploy /prod/backend

FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/apps/superligfrbackend/build /prod/backend/build
WORKDIR /prod/backend/build
ENV NODE_ENV=production
EXPOSE 3333
CMD ["sh", "-c", "node ace migration:run --force && node bin/server.js"]

