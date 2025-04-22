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
    - [Configuration d'une clef secrète](#configuration-dune-clef-secrète)
      - [Pour voir les fichiers de configuration](#pour-voir-les-fichiers-de-configuration)
    - [PHP CS Fixer](#php-cs-fixer)


## Sources
- [Symfony doc](https://symfony.com/doc/current/index.html)
- [Symfonycasts.com](https://symfonycasts.com/screencast/symfony/setup)
- [symfony-2023-05-10](https://github.com/mikhawa/symfony-2023-05-10)
- [Symfony-6.4-LTS](https://github.com/mikhawa/Symfony-6.4-LTS)

---

[Retour au menu](#menu)

---

## Requis à l'installation

Dans un environnement de développement sous Windows 11, vous devez avoir installé les outils suivants :

- **WAMP** ou **XAMPP** ou séparément `PHP` et `MariaDB`
- **PHP** `8.3.14` or higher
- **Composer** `2.8.8` or higher
- **Symfony CLI** `5.11` or higher
- **MariaDB** `11.5.2` or higher

---

[Retour au menu](#menu)

---

## Liens

- [Symfony CLI](https://symfony.com/download) par exemple, via `Scoop` [scoop](https://scoop.sh/)
- [Composer](https://getcomposer.org/)

Un environnement de développement local :
- [XAMPP](https://www.apachefriends.org/index.html)
- [WAMP](https://wampserver.aviatechno.net/)

Ou séparément :
- [PHP](https://www.php.net/)
- [MariaDB](https://mariadb.org/)

---

[Retour au menu](#menu)

---

## Dates de progression

- installation | *2025-04-17* | `Version 7.2.5`
- Mise à jour | *2025-04-19* | `fichier README.md` et `composer.json`

---

[Retour au menu](#menu)

---

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

---

[Retour au menu](#menu)

---

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

[Documentation installation de Symfony](https://symfony.com/doc/current/setup.html)

---

[Retour au menu](#menu)

---

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

[documentation sur les serveurs de Symfony](https://symfony.com/doc/current/setup/symfony_server.html)

---

[Retour au menu](#menu)

---

### Arrêt du serveur
Pour arrêter le serveur, vous pouvez utiliser la commande suivante :

```bash
symfony server:stop
```

---

[Retour au menu](#menu)

---

## Configuration

### Configuration de l'environnement


```bash
cp .env .env.local
```

Le fichier `.env.local` est utilisé pour stocker les variables d'environnement spécifiques à votre environnement de développement local. Il est généralement ignoré par le contrôle de version (par exemple, Git) pour éviter de partager des informations sensibles.

---

[Retour au menu](#menu)

---

#### Configuration de la base de données

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


Vérifiez que le serveur de base de données est en cours d'exécution (par exemple `WAMP` ouvert sous Windows).

```bash
php bin/console doctrine:database:create
```

Il devrait afficher :

```bash
Created database `symfony7` for connection named default
```

La base de données est créée sur votre serveur de base de données `MariaDB`.

---

[Retour au menu](#menu)

---

### Configuration d'une clef secrète

Une clef secrète est utilisée pour signer les cookies et les sessions, elle permet de sécuriser les données sensibles dans votre application Symfony.

Elle est également utilisée pour le chiffrement des données, comme les mots de passe ou les tokens d'authentification.

Elle est générée automatiquement lors de la création du projet Symfony, mais il est recommandé de la changer pour des raisons de sécurité.


Elle se trouve dans le fichier `.env.dev` :

```dotenv
# ...
APP_SECRET=5d1ed3d8ade04970b4a994b573fe6ce6
# ...
```

---

[Retour au menu](#menu)

---

#### Pour voir les fichiers de configuration

```bash
php bin/console debug:dotenv
```

Il faudra en mettre une nouvelle dans le fichier `.env.local`, par exemple :

```dotenv
# ...
###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET=UneClefSecrète
###< symfony/framework-bundle ###
# ...
```

Il est recommandé de ne pas partager cette clef secrète dans le contrôle de version (par exemple, Git) pour éviter que des personnes non autorisées puissent accéder à vos données sensibles.
---

[Retour au menu](#menu)

---

### PHP CS Fixer
Symfony utilise `PHP CS Fixer` pour formater le code PHP. Il est recommandé de l'utiliser pour maintenir un code propre et cohérent.
Il est également utilisé pour vérifier la qualité du code et détecter les erreurs potentielles.


Pour formater le code, vous pouvez utiliser `PHP CS Fixer` :

```bash
composer require cs-fixer-shim
```

mettre en gitignore ces fichiers :

```gitignore
###> php-cs-fixer/shim ###
/.php-cs-fixer.php
/.php-cs-fixer.cache
###< php-cs-fixer/shim ###
```

Dans le fichier `.php-cs-fixer.dist.php` on va mettre les règles de formatage :

```php
<?php
$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude('var')
;
return (new PhpCsFixer\Config())
    ->setRules([
        '@Symfony' => true,
    ])
    ->setFinder($finder)
;
```
Pour voir les commandes disponibles :
```bash
./vendor/bin/php-cs-fixer
```

Pour formater le code :
```bash
./vendor/bin/php-cs-fixer fix
```


https://symfonycasts.com/screencast/symfony/flex-recipes#play

https://symfony.com/doc/current/contributing/code/conventions.html

----

[Retour au menu](#menu)

---

## Utilisation de Stimulus UX

## Les contrôleurs Stimulus dans Symfony : Dynamisme Frontend Centré sur le HTML

Dans l'écosystème Symfony, un contrôleur Stimulus, souvent utilisé via le composant Symfony UX, est une classe JavaScript légère qui vous permet d'ajouter du comportement interactif à votre frontend en se connectant directement aux éléments HTML via des attributs `data-*`. L'approche de Stimulus est de compléter votre HTML existant plutôt que de le remplacer par une application JavaScript monolithique, s'alignant ainsi bien avec la philosophie de Symfony de rendre le développement web plus agréable et efficace.

En substance, un contrôleur Stimulus est un petit morceau de JavaScript réutilisable que vous "attachez" à un élément de votre page HTML. Lorsque Stimulus détecte cet élément (grâce à un attribut `data-controller`), il crée une instance du contrôleur et l'associe à cet élément. Cela vous permet de gérer des interactions spécifiques à cet élément et à ses descendants.

L'intégration de Stimulus dans Symfony est facilitée par le `symfony/stimulus-bundle`. Ce bundle gère l'enregistrement et le chargement automatique de vos contrôleurs, ainsi que ceux provenant des paquets Symfony UX additionnels. Il fournit également des fonctions Twig (`stimulus_controller`, `stimulus_action`, `stimulus_target`) pour simplifier l'ajout des attributs `data-*` nécessaires dans vos templates.

### Concepts Clés de Stimulus

Pour comprendre les contrôleurs Stimulus, il est important de saisir quelques concepts fondamentaux :

* **Controller (Contrôleur) :** Une classe JavaScript qui hérite de `Controller` de la librairie `@hotwired/stimulus`. C'est ici que vous définissez le comportement interactif. Le nom du fichier du contrôleur (par exemple, `hello_controller.js`) détermine le nom utilisé dans l'attribut `data-controller` (ici, `hello`).

* **Element (Élément) :** L'élément HTML auquel le contrôleur est attaché via l'attribut `data-controller`. Dans le contrôleur, vous accédez à cet élément via `this.element`.

* **Targets (Cibles) :** Des éléments spécifiques à l'intérieur de l'élément du contrôleur avec lesquels le contrôleur doit interagir. Vous les définissez dans une propriété statique `targets` dans votre classe de contrôleur et les marquez dans le HTML avec des attributs `data-controller-target="nomDeLaCible"`. Vous y accédez dans le contrôleur via `this.nomDeLaCibleTarget` ou `this.nomDeLaCibleTargets` (si plusieurs éléments partagent le même nom de cible).

* **Actions :** Des méthodes dans votre contrôleur qui sont déclenchées par des événements DOM (clic, soumission, saisie, etc.) sur des éléments spécifiques. Vous connectez un événement à une action en utilisant l'attribut `data-action="typeDeLEvenement->nomDuController#nomDeLaMethode"`.

* **Values (Valeurs) :** Des données que vous pouvez passer de votre template Twig à votre contrôleur JavaScript via des attributs `data-controller-nomDeLaValeur-value="votreValeur"`. Vous déclarez les valeurs attendues dans une propriété statique `values` dans votre contrôleur et y accédez via `this.nomDeLaValeurValue`.

### Exemples Pratiques

Voici quelques exemples pratiques illustrant comment utiliser les contrôleurs Stimulus dans un projet Symfony :

**Exemple 1 : Un simple message de bienvenue**

Imaginez que vous vouliez afficher un message de bienvenue simple lorsqu'un élément apparaît sur la page.

* **Fichier JavaScript (`assets/controllers/hello_controller.js`) :**

```javascript
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Le contrôleur hello est connecté !');
        this.element.innerHTML = '<h2>Bonjour depuis Stimulus !</h2>';
    }
}
```

* **Fichier Twig (`templates/votre_template.html.twig`) :**

```html+jinja
<div {{ stimulus_controller('hello') }}>
    </div>
```

Dans cet exemple, lorsque la page se charge et que l'élément `div` avec l'attribut `data-controller="hello"` est détecté, Stimulus instancie le `HelloController` et appelle sa méthode `connect()`. Cette méthode remplace alors le contenu HTML de l'élément avec "Bonjour depuis Stimulus !".

**Exemple 2 : Un compteur de clics**

Créons un simple compteur de clics.

* **Fichier JavaScript (`assets/controllers/counter_controller.js`) :**

```javascript
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['count'];
    static values = { initialCount: Number };

    connect() {
        this.count = this.initialCountValue || 0;
        this.updateCountDisplay();
    }

    increment() {
        this.count++;
        this.updateCountDisplay();
    }

    updateCountDisplay() {
        this.countTarget.textContent = this.count;
    }
}
```

* **Fichier Twig (`templates/votre_template.html.twig`) :**

```html+jinja
<div {{ stimulus_controller('counter', { initialCount: 10 }) }}>
    <button data-action="click->counter#increment">Cliquez-moi !</button>
    <p>Nombre de clics : <span data-counter-target="count"></span></p>
</div>
```

Ici :

* Le contrôleur `counter` est attaché à la `div`.
* Il déclare une cible `count` (le `<span>` qui affichera le nombre) et une valeur `initialCount`.
* Dans `connect()`, il initialise un compteur interne basé sur la valeur `initialCount` passée depuis Twig (ou 0 par défaut) et met à jour l'affichage.
* La méthode `increment()` est déclenchée par un clic sur le bouton (`data-action="click->counter#increment"`). Elle incrémente le compteur et met à jour l'affichage.
* Le `<span>` est marqué comme la cible `count` (`data-counter-target="count"`).
* La valeur initiale `10` est passée au contrôleur via `stimulus_controller('counter', { initialCount: 10 })`.

**Exemple 3 : Afficher/Masquer un élément**

Un cas d'usage courant est l'affichage ou le masquage d'un élément.

* **Fichier JavaScript (`assets/controllers/toggle_controller.js`) :**

```javascript
import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['toggleableElement'];

    toggle() {
        this.toggleableElementTarget.classList.toggle('hidden');
    }
}
```

* **Fichier CSS (pour définir la classe `hidden`) :**

```css
.hidden {
    display: none;
}
```

* **Fichier Twig (`templates/votre_template.html.twig`) :**

```html+jinja
<div {{ stimulus_controller('toggle') }}>
    <button data-action="click->toggle#toggle">Afficher/Masquer</button>
    <div data-toggle-target="toggleableElement">
        Ce contenu peut être affiché ou masqué.
    </div>
</div>
```

Dans cet exemple :

* Le contrôleur `toggle` gère le comportement.
* Il a une cible `toggleableElement` qui est le `div` à afficher/masquer.
* La méthode `toggle()` est déclenchée par le clic sur le bouton et utilise `classList.toggle('hidden')` pour ajouter ou retirer la classe CSS `hidden`, changeant ainsi la visibilité de l'élément ciblé.

Ces exemples démontrent la simplicité et l'efficacité de Stimulus pour ajouter de l'interactivité frontend ciblée dans vos applications Symfony, en capitalisant sur votre structure HTML existante. Les paquets Symfony UX s'appuient sur ce concept pour fournir des intégrations plus complexes (comme des composants de formulaire enrichis, des graphiques, etc.) en utilisant des contrôleurs Stimulus prêts à l'emploi.