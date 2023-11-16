const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { fields } = require('../../stockage/markdown.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('markdown')
		.setDescription('Afficher la liste des markdown'),
	async execute(interaction) {
        const embed1 = new EmbedBuilder()
            .setTitle('Liste markdown')
            .setColor(0x9900FF)
            .setDescription('Voici la liste des markdown utile pour discord')
        for (let i = 0; i < fields.length; i++) {
            embed1.addFields(fields[i])
        }
        await interaction.reply({embeds:[embed1]})
	},
}