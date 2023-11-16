const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('Ajoute une réaction à un message')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName('message')
                .setDescription('ID du message')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reaction')
                .setDescription('Réaction à ajouter')
                .setRequired(true)),
	async execute(interaction) {
        const message = interaction.options.getString('message', true);
        const reaction = interaction.options.getString('reaction', true);
    	interaction.channel.messages.fetch(message).then(msg => msg.react(reaction));
        await interaction.reply({ content: '✅Réaction ajouté', ephemeral: true});
	},
}