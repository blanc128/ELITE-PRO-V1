require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '';{"noiseKey":{"private":{"type":"Buffer","data":"aD3wf64+1JUxzc8VkHp7VDoKrR82m9Do4vCoFwE78VQ="},"public":{"type":"Buffer","data":"1Xe3nJisJivS5UY3hc3vjJtOsOs8nL94s0D0FTN5LQU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kJXfoxcFTYQntDBe1eRbhpLsxEAeBVUAI5HaEoU7V3Y="},"public":{"type":"Buffer","data":"0M/nA5tmsviuUTkx2KtAiJcRydH6Ie4tLJdrwkYufHQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+CmXv7+e+ArbAGdtbmDT6+7hneIeJQGyQZwJhVXd1l8="},"public":{"type":"Buffer","data":"GdHsFXrXQsQKdHO0eF7ZKNH7hclEhFyu9BUdd+nx0lQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"uGbS/vbE95+Ic/S4IgqcQExrHd5NIKidHBArIPgXCmA="},"public":{"type":"Buffer","data":"9xIUXhYzucs2+C40de5001oA4yfYXNT6B4j5y33ldj4="}},"signature":{"type":"Buffer","data":"Qsq7mGjiyTFno/UljZmlDM/YDwT8FbcnKe0D83JAV0OlaM0im6jMMRJ04PegmTzxlNOXT5DRG273tS/d8rcZBw=="},"keyId":1},"registrationId":79,"advSecretKey":"le1KlgsKzmZp/BJi1Ic/r9zTLwwnfGT55eC4svbrhkY=","processedHistoryMessages":[{"key":{"remoteJid":"50941964977@s.whatsapp.net","fromMe":true,"id":"7E7E79F1275E0A4EF1D1CE0F685EE9FF"},"messageTimestamp":1754133042}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"6X4EPVA8","me":{"id":"50941964977:15@s.whatsapp.net","lid":"143401022394543:15@lid"},"account":{"details":"CIHzu8QGEKrkt8QGGAIgACgA","accountSignatureKey":"HSHkbtkAipKfzs1ctLOeMUHpSSatUYA0EQJsbmjnSDU=","accountSignature":"fU1KwbGJkUhkQtWlG8YseAO8esBvL+R02e/2gEqkkIxG1zaEFffYdzqQk+lJL6L6LQGG/bagHvd1kghIxzRLBw==","deviceSignature":"XPQUEeOLW6zNfIX2we48EmURPmsrMNPyxKNgatkLxci9yNrBri83La6YEwYKp5n2jUv0V2eCaAMcckLdKN2XCQ=="},"signalIdentities":[{"identifier":{"name":"50941964977:15@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BR0h5G7ZAIqSn87NXLSznjFB6UkmrVGANBECbG5o50g1"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIIBQ=="},"lastAccountSyncTimestamp":1754133036,"lastPropHash":"2G4Amu","myAppStateKeyId":"AAAAANTs"}
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '2348109263390';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '+';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.typemenu = process.env.TYPE_MENU || 'v2';
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '*⿻ DONE: Task completed ✔️*',
    prem: '*⦿ This command is made for premium users.⁉️*',
    admin: '*⦿ This command is made for group admins.‼️*',
    botAdmin: '*⦿  Make bot admin to access commands⿻*',
    owner: '*⦿This commands is made for bot owner.*',
    group: '*⦿ This command is made for group chat❕*',
    private: '*⦿ This command is made for private chat ⭕*',
    wait: '*_⚙️PROCESSING DATA......_*',
    error: '*‼️AN ERROR OCCUR‼️*',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
