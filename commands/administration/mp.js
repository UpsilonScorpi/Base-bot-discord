const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mp')
		.setDescription('Envoyer un mp')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addUserOption(option => 
            option.setName('membre')
                .setDescription('Destinataire du message')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Contenue du message')
                .setRequired(true)),
	async execute(interaction) {
        const membre = interaction.options.getUser('membre', true);
    	const message = interaction.options.getString('message', true);
        await membre.send(message);
		await interaction.reply({ content: '✅Message envoyé', ephemeral: true})
	},
}