import fs from 'fs'

const { prefix } = JSON.parse(fs.readFileSync('./config.json'))

export const help = {
	name: 'help',
	description:
		"Liste toutes les commandes disponibles ou donne plus d'info sur une commande",
	aliases: ['commands'],
	usage: '[nom de la commande]',
	cooldown: 5,
	execute(message, args) {
		const data = []
		const { commands } = message.client

		if (!args.length) {
			data.push('Voici la liste de toutes mes commandes disponibles:')
			data.push(commands.map((command) => `\`${command.name}\``).join(', '))
			data.push(
				`\nTu peux utiliser \`${prefix}help [command name]\` pour avoir plus d'information sur la commande!`,
			)

			return message.channel.send(data)
		}

		const name = args[0].toLowerCase()
		const command =
			commands.get(name) ||
			commands.find((c) => c.aliases && c.aliases.includes(name))

		if (!command) {
			return message.reply("that's not a valid command!")
		}

		data.push(`**Name:** ${command.name}`)

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`)
		if (command.description)
			data.push(`**Description:** ${command.description}`)
		if (command.usage)
			data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)

		data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`)

		message.channel.send(data, { split: true })
	},
}
