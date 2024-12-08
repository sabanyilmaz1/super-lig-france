FROM node:20-slim AS base
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
RUN pnpm --filter superligfrfrontend --prod deploy /prod/frontend

FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/apps/superligfrbackend/build /prod/backend/build
COPY --from=build /usr/src/app/apps/superligfrbackend/.env.production /prod/backend/build/.env
WORKDIR /prod/backend/build
ENV NODE_ENV=production
EXPOSE 3333
CMD ["sh", "-c", "node ace migration:run --force && node bin/server.js"]

FROM base AS frontend
COPY --from=build /prod/frontend /prod/frontend
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/apps/superligfrfrontend/build /prod/frontend/build
WORKDIR /prod/frontend/build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["pnpm", "start"]

