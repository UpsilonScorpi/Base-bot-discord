const { Events } = require('discord.js');
const { salon_log } = require('../stockage/data.json')

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`Aucune commande correspondant à ${interaction.commandName} a été trouvé.`);
				interaction.guild.channels.cache.get(salon_log).send(`\`\`\`ansi\n\u001b[1;31mErreur ${interaction.commandName}\u001b[0m\n\u001b[4;34mCommande introuvable\u001b[0m\`\`\``)
				return
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Erreur d'execution ${interaction.commandName}`);
				console.error(error);
				interaction.guild.channels.cache.get(salon_log).send(`\`\`\`ansi\n\u001b[1;31mErreur ${interaction.commandName}\u001b[0m\n\u001b[4;34m${error}\u001b[0m\`\`\``)
			}
		}
	},
}