# Étape 1 : Installer les dépendances de développement
FROM node:20-alpine AS development-dependencies-env

# Copier les fichiers dans le conteneur
COPY . /app
WORKDIR /app

# Installer les dépendances (incluant devDependencies)
RUN npm ci

# Étape 2 : Installer les dépendances de production
FROM node:20-alpine AS production-dependencies-env

# Copier uniquement les fichiers nécessaires pour l'installation
COPY ./package.json package-lock.json /app/
WORKDIR /app

# Installer uniquement les dépendances de production
RUN npm ci --omit=dev

# Étape 3 : Builder le projet
FROM node:20-alpine AS build-env

# Copier les sources et les dépendances
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app

# Lancer le build Vite.js
RUN npm run build

# Étape 4 : Utiliser Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers du build dans Nginx
COPY --from=build-env /app/dist /usr/share/nginx/html

# Configurer Nginx pour les routes SPA
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
