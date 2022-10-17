import { Client, GatewayIntentBits } from 'discord.js'

import * as dotenv from 'dotenv'
dotenv.config()
const { token } = process.env


const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', c => {
	console.log(`Logged in as ${c.user.tag}`)
})

client.login(token)
