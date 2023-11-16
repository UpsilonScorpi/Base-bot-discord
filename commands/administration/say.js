const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Envoyer un message')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Contenue du message')
                .setRequired(true))
        .addChannelOption(option => 
            option.setName('salon')
                .setDescription('Destination du message')
                .addChannelTypes(ChannelType.GuildText)),
	async execute(interaction) {
        const channel = interaction.options.getChannel('salon') ?? interaction.guild.channels.cache.get(interaction.channel.id);
    	const message = interaction.options.getString('message', true);
    	await channel.send(message);
		await interaction.reply({ content: '✅Message envoyé', ephemeral: true})
	},
}