# Base-bot-discord
Une base solide pour un bot discord

## Configuration
Tout d'abord, il vous faut un logiciel pour coder, par exemple [Visual Studio Code](https://code.visualstudio.com/)

Ensuite, il vous faut télécharger [Node.js](https://nodejs.org/en)

Enfin, ouvrer un teminal dans votre logiciel et entrer la suite de commande suivant:

- Initialisation du projet : `npm init`

- Installation de discord.js : `npm install discord.js`

- Installation de dayjs : `npm install dayjs`

- Installation du linter : `npm install --save-dev eslint`

Une fois cela fait, télécharger le code et la suite de la configuration de votre bot se feras via 2 fichier

### Premier fichier: config.js
Il vous faudra le remplir avec les données demandé

### Deuxème fichier: stockage/data.json
Il vous faudra le remplir avec les données demandé

Pour le RichPresence:

- Activity : Le titre de l'activité

- Activitype : Le type d'activité
    - 0 = "Playing": joue à
    - 1 = "Streaming": stream
    - 2 = "Listening": écoute
    - 3 = "Watching": regarde
    - 5 = "Competing": participe à

- Status : Le status du bot
    - "online": en ligne
    - "idle": inactif
    - "dnd": ne pas déranger