# Super Lig France

Application web complète permettant aux utilisateurs de suivre les matchs, classements,
et statistiques des équipes et joueurs de la Super Lig turque.

## 🚀 Fonctionnalités

### Backend (AdonisJS)

- Authentification complète (connexion, inscription, gestion de profil)
- Intégration avec l'API Sportmonks pour les données en temps réel
- Gestion des périodes de matchs pour réduire les appels API
- Système de blog avec articles et commentaires

### Frontend (React Router)

- Interface moderne et responsive avec TailwindCSS et Shadcn UI
- Visualisation des classements, résultats et matchs à venir
- Système de blog et commentaires
- Notation des joueurs et des matchs
- Expérience utilisateur fluide et performante

## 📋 Architecture du Projet

```
super-lig-france/
├── apps/
│   ├── superligfrbackend/         # API Backend AdonisJS
│   │   ├── app/                   # Logique métier
│   │   │   ├── auth/              # Authentification
│   │   │   ├── articles/          # Gestion des articles
│   │   │   └── ...                # Autres modules
│   │   ├── config/                # Configuration
│   │   └── start/                 # Point d'entrée
│   │
│   └── superligfrfrontend2/       # Frontend React Router
│       ├── app/                   # Application
│       │   ├── components/        # Composants réutilisables
│       │   ├── core/              # Fonctionnalités principales
│       │   ├── features/          # Fonctionnalités spécifiques
│       │   ├── lib/               # Bibliothèques
│       │   ├── routes/            # Pages de l'application
│       │   └── utils/             # Utilitaires
│       └── public/                # Ressources statiques
├── packages/                      # Packages partagés (si applicable)
└── node_modules/                  # Dépendances
```

## 🛠️ Technologies Utilisées

### Backend

- **AdonisJS**: Framework Node.js robuste et moderne
- **PostgreSQL**: Base de données relationnelle
- **TypeScript**: Typage statique pour une meilleure maintenabilité

### Frontend

- **React Router**: Pour la navigation entre les pages
- **TailwindCSS**: Framework CSS utilitaire
- **Shadcn UI**: Composants UI accessibles et personnalisables
- **TypeScript**: Pour un développement plus fiable

## 🔧 Installation et Configuration

### Prérequis

- **Node.js** (v18 ou supérieur)
- **pnpm** (gestionnaire de packages)
- **PostgreSQL**
- Clé API pour [Sportmonks](https://www.sportmonks.com/)

### Étapes

1. **Cloner le dépôt**

   ```bash
   git clone <url-du-repo>
   cd super-lig-france
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   ```

3. **Configurer les variables d'environnement**

   - Copier et configurer les fichiers `.env.example` dans chaque application:
     ```bash
     # Pour le backend
     cp apps/superligfrbackend/.env.example apps/superligfrbackend/.env
     # Pour le frontend
     cp apps/superligfrfrontend2/.env.example apps/superligfrfrontend2/.env.local
     ```
   - Remplir les informations nécessaires (clés API, configuration BDD, etc.)

4. **Lancer les migrations (backend)**

   ```bash
   cd apps/superligfrbackend
   node ace migration:run
   ```

5. **Démarrer les applications**
   ```bash
   # À la racine du projet
   pnpm dev
   ```
   - Backend: http://localhost:3333
   - Frontend: http://localhost:5173

## 🔍 Utilisation

### Authentification

- **Connexion** : `/auth/login`
- **Inscription** : `/auth/register`

### Fonctionnalités

- **Accueil** : Vue d'ensemble et dernières actualités
- **Classements** : `/standings` - Classement actuel de la Super Lig
- **Résultats** : `/results` - Derniers matchs joués
- **Matchs à venir** : `/fixture` - Calendrier des prochains matchs
- **Blog** : `/blog` - Articles et actualités

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. Commit vos changements
   ```bash
   git commit -m 'Ajout de ma fonctionnalité'
   ```
4. Push vers la branche
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
5. Ouvrir une Pull Request

## 📝 Informations Supplémentaires

### Démo

- Email: test@gmail.com
- Mot de passe: azerty123

### Pour le Développement

- Le projet utilise Docker pour faciliter le déploiement
- Configuration Nginx incluse pour la production

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

Développé avec ❤️ pour les passionnés de football turc.
