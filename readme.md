# Projet de Test Symfony - React Dashboard

Ce projet est un tableau de bord construit avec Symfony 7 pour le backend et React pour le frontend, avec des données extraites de l'API [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

Étant donné que les interactions directes avec l'API (ajout, modification, suppression) ne sont pas prises en charge, j'ai extrait les données et les ai stockées dans une base de données MySQL. Toutes les opérations (CRUD) se font donc via cette base de données.

## Prérequis

Assurez-vous que les technologies suivantes sont installées sur votre machine :

- **PHP** : Version 8.3
- **Node.js & npm** : Dernières versions
- **Composer** : Version 2
- **MySQL** : Version 8

## Étapes d'installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/manaka02/test-14-08-24.git
   cd test-14-08-24
    ```
   
2. **Installer les dépendances PHP :**

   ```bash
   composer install
   ```
   
3. **Installer les dépendances JavaScript et compilez :**

   ```bash
    npm install
    npm run build
   ```
   
4. **Configurer la base de données :**

   Créez une base de données MySQL et configurez-la dans le fichier `.env.local.php` :

   ```bash
   composer dump-env dev
   ```
   
   Modifiez les paramètres de connexion à la base de données dans le fichier `.env.local.php` :

   ```bash
   DATABASE_URL=mysql://<user>:<password>@<host>:<port>/<database>
   ```

5. **Créer la base de données et les tables :**

   ```bash
    php bin/console doctrine:database:create
    php bin/console doctrine:schema:update --force

    ```
   
6. **Charger les données initiales :**

   ```bash
   php bin/console app:extract-data
   ```
   
7. **Lancer le serveur de développement :**

   ```bash
    symfony serve:start
    ```