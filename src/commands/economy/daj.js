const economy = require('../../economy')

module.exports = {
  commands: ['daj'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<@osoba> <ilosc>",
  callback: async (message, arguments) => {
    const target = message.mentions.users.first() 
    if (!target) {
        message.reply("Oznacz osobę!")
        return
    } else {
    if(isNaN(arguments[1])) {
        message.reply("Podaj prawidłową ilość mandarynek.")
        return
    } else {
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id
    let coins_author = await economy.getCoins(guildId, message.author.id)
    let coins_mentioned = await economy.getCoins(guildId, userId)
    if (coins_author<arguments[1]) {
        message.reply("Nie posiadasz tyle mandarynek!")
        return
    } else {
        let new_author = coins_author - arguments[1]
        let newCoins_author = await economy.setCoins(guildId,message.author.id,new_author)
        let newCoins_mentioned = await economy.addCoins(guildId,userId,arguments[1])

    

    message.reply(`Dałeś tej osobie ${arguments[1]} mandarynek! Zostało ci: ${newCoins_author}, a osoba która je dostała, ma ich teraz ${newCoins_mentioned}`)
    }
}
}
  },
}
