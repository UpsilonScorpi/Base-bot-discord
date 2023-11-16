const { Events } = require('discord.js');
const {richpresence} = require('../stockage/data.json')

module.exports = {
	name: Events.ClientReady,
	execute(client) {
		let i = 0;
        setInterval(() => {
            client.user.setPresence({activities:[{name: richpresence.activity[i], type: richpresence.activitype[i] }],status: richpresence.status[i]})
            i = ++i % richpresence.status.length;
        }, 3e4)
	},
}