const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { media } = require('../../stockage/data.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aide')
		.setDescription('Aide du bot'),
	async execute(interaction) {
        const icon = media.image.icon
        const logo = media.image.logo

        const embedaide = new EmbedBuilder()
            .setAuthor({name:'Bot'})
            .setTitle('❓Aide BOT')
            .setColor(0x9900FF)
            .setDescription(`Nombre de commande: \`7\`\nNombre de catégorie: \`2\``)
            .setFooter({text:'En espérant vous avoir aidez'})
            .addFields({
                name:'🛑Administration',
                value:`\`/say\`: Envoie un message dans un salon
                \`/mp\`: Envoie un message privé à un membre
                \`/react\`: Ajoute une réaction à un message`
            })
            .addFields({
                name:'🪛Utilitaire',
                value:`\`/timestamp\`: Génère un timestamp
                \`/markdown\`: Donne la liste de tous les markdowns
                \`/ping\`: Renvoie la latence du bot
                \`/aide\`: Donne la liste des commandes du bot`
            })

        await interaction.reply({embeds:[embedaide]})
	},
}