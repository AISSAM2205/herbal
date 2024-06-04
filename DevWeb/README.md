## Guide de démarrage facile

### Installation de Node.js
 - Téléchargez Node.js depuis la page officielle [ici](https://nodejs.org/en/download/prebuilt-installer/current).
 - Ouvrez le commonde propmt et tapez `node -v` pour vérifier si Node.js est installé correctement.

### Ouvrir le projet
 - Ouvrez Visual Studio Code. Glissez et déposez le dossier de projet sur la fenêtre de Visual Studio Code.

### Installation les packages
 - Ouvrez un terminal. Dans Visual Studio Code, vous pouvez utiliser le raccourci clavier <kbd>Ctrl</kbd> + <kbd>J</kbd> pour ouvrir le panneau Terminal.
 - Dans le terminal, exécutez la commande suivante :

```cmd
npm install && cd backend && npm install
```
 - Si vous rencontrez une erreur, essayez d'exécuter la commande suivante :

```cmd
cmd
npm install && cd backend && npm install
```
 - Attendez la fin de l'installation des paquets.

 - Fermez le terminal en utilisant le bouton "Fermer" (généralement représenté par une poubelle).

### Configuration des terminaux
 - Ouvrez deux nouveaux terminaux. Utilisez le raccourci clavier <kbd>Ctrl</kbd> + <kbd>J</kbd> pour ouvrir le panneau Terminal, puis cliquez sur le bouton <kbd>+</kbd> pour en ajouter un autre.
 - (Facultatif) Pour une meilleure organisation, sélectionnez les deux terminaux et faites un clic droit. Sélectionnez ensuite "Join les terminaux".

### Démarrer le serveur backend
 - Dans l'un des terminaux ouverts, exécutez la commande suivante :
```cmd
node backend/server.js
```

### Démarrer le serveur frontend
 - Dans l'autre terminal, exécutez la commande suivante :
```cmd
npx http-server ./ -p 3000 --cors
```
 - Important : Ne fermez pas ces deux terminaux, car cela pourrait interrompre le fonctionnement du site web.

### Accéder à l'application
 - Ouvrez un nouvel onglet dans votre navigateur web.
 - Tapez http://127.0.0.1:3000/shop ou http://localhost:3000/shop dans la barre d'adresse.
 - Si vous cliquez sur le bouton "Ajouter", actualisez la page pour voir les modifications. Notez que la connexion à la base de données n'étant pas en temps réel, un actualisation manuelle peut être nécessaire.
