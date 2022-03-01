const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/*let result = await lib.discord.guilds['@0.2.2'].roles.create({
  guild_id: `896223263758377020`,
  name: `advanced vip`,
  permissions: `8`,
  hoist: false,
  mentionable: false,
  "position": 255
});*/
let result = await lib.discord.guilds['@0.2.2'].roles.list({
  guild_id: `896223263758377020`
});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `896223263758377022`,
  content: `${result}`
});