# projet de test Symfony - React Dashboard

Données extraites de l'API https://jsonplaceholder.typicode.com/

// comme les intéractions avec l'API ne sont pas pris en compte (ajout, modification, suppression), j'ai
décidé d'extraire les données et de les stocker dans une base de données mysql. Toutes les intéractions se font avec la base de données.

php 8.3
npm
Composer 2
mysql 8

git clone

composer install
npm install
npm run build

composer dump-env dev


[//]: # (complete mysql database configuration in .env.local.php)

// database create
php bin/console doctrine:database:create
// force update entity
php bin/console doctrine:schema:update --force


// extract données  : 
php bin/console app:extract-data

symfony server:start 