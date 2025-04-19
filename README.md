# Symfony 7

## Menu
- [Sources](#sources)
- [Requis à l'installation](#requis-à-linstallation)
- [Liens](#liens)
- [Dates de progression](#dates-de-progression)
- [Installation](#installation)
- [Création du projet](#création-du-projet)
  - [Installation de Symfony 7 dernière version](#installation-de-symfony-7-dernière-version)
  - [Lancement du serveur](#lancement-du-serveur)
  - [Arrêt du serveur](#arrêt-du-serveur)
- [Configuration](#configuration) 
  - [Configuration de l'environnement](#configuration-de-lenvironnement)
  - [Configuration de la base de données](#configuration-de-la-base-de-données)


## Sources
- [Symfony doc](https://symfony.com/doc/current/index.html)
- [Symfonycasts.com](https://symfonycasts.com/screencast/symfony/setup)
- [symfony-2023-05-10](https://github.com/mikhawa/symfony-2023-05-10)
- [Symfony-6.4-LTS](https://github.com/mikhawa/Symfony-6.4-LTS)

## Requis à l'installation

Dans un environnement de développement sous Windows 11, vous devez avoir installé les outils suivants :

- **WAMP** ou **XAMPP** ou séparément `PHP` et `MariaDB`
- **PHP** `8.3.14` or higher
- **Composer** `2.8.8` or higher
- **Symfony CLI** `5.11` or higher
- **MariaDB** `11.5.2` or higher

## Liens

- [Symfony CLI](https://symfony.com/download) par exemple, via `Scoop` [scoop](https://scoop.sh/)
- [Composer](https://getcomposer.org/)

Un environnement de développement local :
- [XAMPP](https://www.apachefriends.org/index.html)
- [WAMP](https://wampserver.aviatechno.net/)

Ou séparément :
- [PHP](https://www.php.net/)
- [MariaDB](https://mariadb.org/)

## Dates de progression

- installation | *2025-04-17* | `Version 7.2.5`
- Mise à jour | *2025-04-19* | `fichier README.md` et `composer.json`

## Installation

Vérifiez que vous avez installé `PHP` et `Composer` en exécutant les commandes suivantes :

```bash
php -v
```
```bash
composer -V
```
```bash
symfony -v
```

## Création du projet

Vérification de notre environnement de développement :

```bash
symfony check:req
```

Des recommendations peuvent apparaître, vous pouvez les ignorer, mais il est préférable de les corriger.

### Installation de Symfony 7 dernière version

Création d'un projet Symfony 7 avec comme nom de dossier `Symfony7`, en utilisant le `--webapp`, c'est-à-dire avec `Twig`, `Doctrine`, `Security` , `MakerBundle`, ainsi que les dépendances les plus courantes.

```bash
symfony new --webapp Symfony7

cd Symfony7
```

### Lancement du serveur

```bash
symfony serve -d
```
Le serveur est lancé sur le port `8000` par défaut.

https://127.0.0.1:8000/

Si vous avez un problème de certificat SSL, vous pouvez l'installer avec la commande suivante :

```bash
symfony server:ca:install
```
### Arrêt du serveur
Pour arrêter le serveur, vous pouvez utiliser la commande suivante :

```bash
symfony server:stop
```

## Configuration

### Configuration de l'environnement


```bash
cp .env .env.local
```

Dans le fichier `.env.local`, modifiez les lignes suivantes :

```dotenv
# ...
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
# ...
```
Par l'utilisation d'une base de données `MariaDB`, la ligne devient :

```dotenv
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
DATABASE_URL="mysql://root:@127.0.0.1:3307/symfony7?serverVersion=11.5.2-MariaDB&charset=utf8mb4"
# DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
# ...
```

### Configuration de la base de données

Vérifiez que le serveur de base de données est en cours d'exécution (par exemple `WAMP` ouvert sous Windows).

```bash
php bin/console doctrine:database:create
```

Il devrait afficher :

```bash
Created database `symfony7` for connection named default
```

La base de données est créée sur votre serveur de base de données `MariaDB`.