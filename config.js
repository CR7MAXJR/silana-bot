import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['994407726748', 'غيـ🫅ـو ثــ❄️ـرونــز', true],
['249112653227', 'Tokito ', false],
['', '', false]
]

global.info = {
 nomerbot: '994407726748',
 pairingNumber: '249112653227',
 nameown: 'غيـ🫅ـو ثــ❄️ـرونــز',
 nomerown: '994407726748',
 packname: 'sticker by ',
 author: 'غيـ🫅ـو ثــ❄️ـرونــز',
 namebot: 'ꜱɪʟᴀɴᴀ',
 wm: ''-'_꩜ Tomioka 𝘣𝘰𝘵 ꩜_'-'',
 stickpack: 'Whatsapp',
 stickauth: 'ꜱɪʟᴀɴᴀ ʙᴏᴛ '
}

// Thumbnail 
global.media = {
 profil: 'https://i.postimg.cc/JngNxCnh/tanjiro-kamado-demon-slayer-kimetsu-no-yaiba-4k-wallpaper-uhdpaper-com-231-2-a.jpg',
 did: 'https://i.postimg.cc/cCG543SZ/demon-slayer-zenitsu-inosuke-4k-wallpaper-uhdpaper-com-890-1-e.jpg',
 rules: 'https://i.postimg.cc/sXk44C6J/vi-league-of-legends-4k-wallpaper-uhdpaper-com-336-5-d.jpg',
 thumbnail: 'https://i.postimg.cc/brVC0nj7/giyu-demon-slayer-water-hashira-4k-wallpaper-uhdpaper-com-227-1-f.jpg',
 thumb: 'https://telegra.ph/file/161c0a22c03f7859c7599.jpg',
 logo: 'https://telegra.ph/file/161c0a22c03f7859c7599.jpg',
 unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi: 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess: 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://www.instagram.com/m7m7___es?igsh=MXFlbXJ2dGhsbG1kNg==',
 sgc: 'https://whatsapp.com/channel/0029Vb692B2I1rcnAu4n3O3y'
}

global.wait =` انتظر .. أنا أحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *Please be patient*\n\> Running command from *User*!',
 eror: '🤖*Bot Information*\n\> Sorry for the inconvenience in using *Bobiza Bot*. There was an error in the system while executing the command.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
