# Bot Template
- Une simple template d'un bot Discord avec divers module. Template de bot réservé aux développeurs experimenté.

# Comment utiliser la template ?
- Pour utiliser la Template il suffis de créer un fichier `.env` et mettre le token du bot dedans.
*Exemple de .env*
`CLIENT_TOKEN=TokenDuBot`
- Pour créer une commande, créer un fichier `maCommande.js` dans le dossier `commands/Utilisateur` et mettez ce modèle pour le lancer.
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
