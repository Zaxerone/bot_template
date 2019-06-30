# Bot Template
- Une simple template d'un bot Discord avec divers module. Template de bot réservé aux développeurs experimenté.

# Comment utiliser la template ?
- Pour utiliser la Template il suffis de créer un fichier `.env` et mettre le token du bot dedans.

*Exemple de .env*

`CLIENT_TOKEN=TokenDuBot`
- Pour créer une commande, créez un fichier `maCommande.js` dans le dossier `commands/Utilisateur` et mettez ce modèle pour le lancer.
```js
const Command = require("../../modules/Command.js");

class Cmd extends Command {
  constructor(client) {
    super(client, {
      name: "cmd",
      description: "Description de votre Commande",
      usage: "cmd",
      guildOnly: true, // Interdire la commande en Mp
      aliases = "aliase",
      permLevel = "Utilisateur" // Niveau de Permission
    });
  }

  run(message, args, level) {
  // Reste du code
  }
}

module.exports = Cmd;
```
- Puis pourez aussi créer des events en créant un fichier `monEvent.js` dans le dossier `events` en suivant ce modèle-ci
```js
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(/*Type d'event*/) {
// Reste du code
    );
  }
};
```
# Quels sont les modules nécessaires ?
- Vous n'avez pas besoin d'installer tous les modules qui vont suivre 1 par 1, vous avez juste à faire `npm install` et cela installera tous les modules.
```xl
- better-sqlite-pool
- body-parser
- chalk
- discord.js
- dotenv
- ejs
- enmap
- express
- express-passport
- express-session
- helmet
- klaw
- marked
- memorystore
- moment
- moment-duration-format
- ms
- passport
- passport-discord
- readline-sync
- snekfetch
```
