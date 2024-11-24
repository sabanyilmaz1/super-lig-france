# Super Lig France

**Super Lig France** est une application web complète permettant aux utilisateurs de suivre les matchs, classements, 
et statistiques des équipes et joueurs de la Super Lig. Le projet est divisé en deux parties :
- **Backend** : API construite avec AdonisJS.
- **Frontend** : Interface utilisateur développée avec RemixJS.

---

## **Fonctionnalités Principales**

### Backend (AdonisJS)
- Gestion des utilisateurs (authentification, profils).
- Intégration avec l'API Football pour récupérer des données de matchs, classements, et statistiques.
- Mise en cache des données avec Redis pour optimiser les performances.
- Gestion des périodes de matchs pour limiter les appels API.
- Support de contenu dynamique pour les articles.

### Frontend (RemixJS)
- Affichage des classements et résultats en direct.
- Système de blog pour lire les articles récents sur la Super Lig.
- Intégration de Twitter pour afficher les derniers tweets de comptes spécifiques.
- Interface responsive adaptée pour mobile et desktop.

---

## **Structure du Projet**

```plaintext
super-lig-fr/
├── .turbo/                 # Configuration pour TurboRepo
├── shared/                 # Typages partagés (TypeScript)
├── superligfrbackend/      # Backend AdonisJS
│   ├── app/                # Contient les controllers, models, middlewares, etc.
│   ├── config/             # Configuration pour Redis, database, etc.
│   ├── start/              # Point d'entrée de l'application
│   └── ...                 # Autres fichiers backend
├── superligfrfrontend/     # Frontend RemixJS
│   ├── app/                # Routes, composants, loaders
│   ├── public/             # Fichiers statiques
│   └── ...                 # Autres fichiers frontend
├── package.json            # Dépendances partagées (TurboRepo)
├── turbo.json              # Configuration de TurboRepo
└── README.md               # Documentation du projet
```

---

## **Installation**

### Prérequis
- **Node.js** (version ≥ 18.x)
- **pnpm** (gestionnaire de packages)
- **Redis** (pour la mise en cache)
- **PostgreSQL** (base de données)
- Clé API pour [API-Football](https://www.api-football.com/).

### Étapes d'installation

#### 1. Cloner le dépôt
```bash
git clone <votre-repo>
cd super-lig-fr
```

#### 2. Installer les dépendances
Assurez-vous que **pnpm** est installé, puis exécutez :
```bash
pnpm install
```

#### 3. Configurer les variables d'environnement
Copiez les fichiers `.env.example` dans les dossiers `superligfrbackend` et `superligfrfrontend`, puis remplissez-les :

**Backend (`superligfrbackend/.env`)** :
```plaintext
PORT=3333
HOST=127.0.0.1
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=yourpassword
PG_DB_NAME=superlig
REDIS_CONNECTION=local
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
API_FOOTBALL_KEY=your-api-key
```

**Frontend (`superligfrfrontend/.env`)** :
```plaintext
API_URL=http://localhost:3333
```

#### 4. Lancer la base de données et Redis
- Lancez PostgreSQL avec vos configurations.
- Lancez Redis :
```bash
redis-server
```

#### 5. Exécuter les migrations de la base de données
Dans le dossier `superligfrbackend`, exécutez :
```bash
cd superligfrbackend
node ace migration:run
```

#### 6. Démarrer les serveurs
Lancez les deux parties (backend et frontend) en parallèle :

**Backend** :
```bash
cd superligfrbackend
npm run dev
```

**Frontend** :
```bash
cd superligfrfrontend
npm run dev
```

Accédez à l'application via [http://localhost:3000](http://localhost:3000).

---

## **Utilisation**

### Backend Endpoints
- **`/lastFixture`** : Dernier match de la Super Lig.
- **`/standings`** : Classement de la Super Lig.
- **`/articles`** : Articles publiés sur le blog.

### Frontend
- Page d'accueil : Affiche les articles récents et le classement actuel.
- Article : Lecture détaillée des articles du blog.
- Intégration Twitter : Affiche les derniers tweets des comptes suivis.

---

## **Contribuer**

### Comment contribuer ?
1. Fork le projet.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b ma-feature
   ```
3. Faites vos modifications et poussez-les :
   ```bash
   git add .
   git commit -m "Ajout de ma nouvelle fonctionnalité"
   git push origin ma-feature
   ```
4. Ouvrez une Pull Request.

---

## **Technologies Utilisées**

### Backend
- **AdonisJS** : Framework backend Node.js.
- **Redis** : Pour la mise en cache.
- **PostgreSQL** : Base de données relationnelle.

### Frontend
- **RemixJS** : Framework React moderne pour des applications full-stack.
- **Tailwind CSS** : Pour un design rapide et élégant.

---

## **Licence**

Ce projet est sous licence [MIT](LICENSE). Vous êtes libre de l'utiliser, de le modifier et de le partager.

---

## **Auteur**

Projet réalisé par **[Votre Nom]**. Pour toute question, veuillez me contacter à [votre.email@example.com](mailto:votre.email@example.com).
