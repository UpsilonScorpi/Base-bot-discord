const { Events } = require('discord.js');
const { salon_log } = require('../stockage/data.json')
const { guildId } = require('../config.json')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Connecter`);
		client.guilds.cache.get(guildId).channels.cache.get(salon_log).send(`\`\`\`ansi\n\u001b[1;32mConnecter\u001b[0m\`\`\``)
		client.user.setPresence({activities:[{name: "⚙️En démarage", type: 5 }],status: "dnd"});
	},
};