/*const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const message = context.params.event;

if (message.content.includes('https')) {
  await lib.discord.channels['@0.2.0'].messages.destroy({
    message_id: message.id, // required
    channel_id: message.channel_id, // required
  });

  await lib.discord.channels['@0.2.0'].messages.create({
    content: `<@${message.author.id}> You just sent a link. It's now gone!`,
    channel_id: message.channel_id,
  });
}*/
//hello there
//<@${message.author.id}> You just sent a link. It's now gone!
//<@!user_id>