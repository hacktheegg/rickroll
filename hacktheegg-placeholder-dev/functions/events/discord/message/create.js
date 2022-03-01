/*module.exports = async (event, context) => {
  const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  const userID = `${context.params.event.author.id}`;

  const username = `${context.params.event.author.username}`;

  const BANNED_WORDS = [`word1`, `word2`]; // Add banned words

  const regEx = new RegExp(BANNED_WORDS.join('|'), 'gi');

  let messageContent = event.content;

  if (messageContent.match(regEx)) {
    await lib.discord.channels['@0.0.3'].messages.destroy({
      message_id: event.id,
      channel_id: event.channel_id,
    }),
      await lib.discord.users['@0.0.3'].dms.create({
        recipient_id: `${context.params.event.author.id}`,
        content: `WOAH THERE! Language dude! Watch it, you don't wanna get warned, do you? \n 
        Filtered message: \`${messageContent}\``, //Message you want users to see when bot DMs them
      });

    await lib.discord.channels['@0.0.3'].messages.create({
      channel_id: ``, // Log channel of your server where you'll be notified when someone swears'
      content: '', // Message header
      tts: false,
      embed: {
        type: 'rich',
        author: {
          name: `${username}`,
          icon_url: '', //author user icon link
        },
        title: '', // Embed title
        description: `${username} has said a banned word`, // This is changeable
        fields: [
          {
            name: 'User',
            value: `<@!${userID}> | \`${userID}\``,
          },
          {
            name: 'Filtered Message',
            value: `*${messageContent}*`,
          },
        ],
        timestamp: new Date(),
        footer: {
          text: '',
        },
      },
    });
  }
};*/