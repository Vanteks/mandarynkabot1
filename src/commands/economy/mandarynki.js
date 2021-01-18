const economy = require('../../economy')

module.exports = {
  commands: ['mandarynki'],
  maxArgs: 1,
  expectedArgs: "[@osoba]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)

    message.reply(`Ta osoba posiada ${coins} mandarynek!`)
  },
}
