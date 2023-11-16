const { SlashCommandBuilder, time } = require('discord.js');
const { erreur, time_zone } = require('../../stockage/data.json')
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timestamp')
        .setDescription('Générer un timestamp')
        .addStringOption(opt =>
            opt.setName('date_heure')
                .setDescription('Date et heure (ex: "1970-01-01T01:00")')
                .setRequired(true)
        )
        .addStringOption(opt =>
            opt.setName('formatage')
                .setDescription('Type de formatage')
                .setRequired(true)
                .addChoices(
                    { name: '01/01/1970', value: 'd' },
                    { name: '1 janvier 1970 01:00', value: 'f' },
                    { name: '01:00', value: 't' },
                    { name: '1 janvier 1970', value: 'D' },
                    { name: 'jeudi 1 janvier 1970 01:00', value: 'F' },
                    { name: 'il y a 54 ans', value: 'R' },
                    { name: '01:00:00', value: 'T' }
                )
        ),
    async execute(interaction) {
        const formatage = interaction.options.getString('formatage');
        const date_heure = interaction.options.getString('date_heure');
        const date = dayjs.tz(date_heure, time_zone)

        if (!date.isValid()) {
            await interaction.reply({
                content: erreur.bot_timestamp_date,
                ephemeral: true
            });
            return;
        }

        const timestamp = time(Math.floor(+date / 1000), formatage)

        await interaction.reply({ content: `${timestamp} : \`${timestamp}\``, ephemeral: true });
    },
};