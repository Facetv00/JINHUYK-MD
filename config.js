//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "+243904468847";
global.owner = process.env.OWNER_NUMBER || "+243904468847";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/R9HhHZ6/mrfrankofc.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0gxRy83VHlTcUtINzNkQTZ5b3ZwVk1aNTlGZEsvWEFCc0M1aFBwSEdVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFV1WTUwKzQzTHIrWExrSXVVcDBEekJReUo2YmVDbU5QdmovTnc1dC9ocz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRW8xV2JYWGNUUVRGS3ZiK3B3dEw2VU5FVTE2ZGF4UTZZNFhnYkF5VWt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQOEJlMjZBem9XNFF6Vkp3TkJBc2tiRUg3SE80c1F2Lys1YU9iZDNSSW4wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHZFFVMUVhWUJubmJ0eHN1TjZIcGJPSUVubnVjYzNObVFocTJlUDhnVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh5S2VlZU1DRTBDN2xrZllYR0dMWURjeElGbkNjSGxaVFhqVWZvRmlBalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUwxM2pHcXhXZW1zbDF5ZG11MUhQSGEvcWIvdVU3TDRpR0dxQ0FycWFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01ybFlWb2Zob0lwZUFVNksxNzRnMERkbEJUMlZnMk4veGhLS3htR25sND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVvczVvK3IwWFdGZlBUUjBFQ3VFZGdmaFpZdGdyMGUzL2FDcjA2WUtYOXNZR2pZVEdTc1F3QXErZDhZUmtKeXFLZFhBcEs1MjF4MXQzaUVkd0xZWmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiZDBUb0FCbGRlanBZNldsTnR2RXNpWXJweEQyVkFHRWtJOVJvTHZqclJ6VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDM5MDQ0Njg4NDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTcwMEUzRTI2RjNBOUNGMTgyNUY3RjgxREVCMTQzMkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTk2MTcwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ3lQNUJLT1pTWGVGOXBYNXZZQkJHZyIsInBob25lSWQiOiJiMTYyMDA1YS00YTMyLTRmODQtYjU1Zi02NTkyNGNlNmVhYmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlMrK0t3VjR4MitRWXo4aU1XelZQK0hMRmdjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRJYmhteGNWRnF0N3dnZHBZSEt3VTFTWHIvcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHUzRSODlXRCIsIm1lIjp7ImlkIjoiMjQzOTA0NDY4ODQ3OjU0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmY/wnZmK8J2ZiPCdmYjwnZmUIPCdmY7wnZmD8J2ZgPCdmYfwnZi98J2ZlCDwnZmC8J2ZjfCdmYTwnZmI8J2ZiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1Nvd1lRQkVOblk0cnNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia1ZCMmp3eEdjYVBCM0xlbWZ4bWlhZVdUbHZTSGVJeFJ2UGM1cW9MRHlBdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZGFnMEVNc0hWUWZCdCtGQ1VqZVJrK2h3S29RK0lZeFdlNTR3VGZ1cjBxV0hqcWxFZzZhUzcyRlM3U3pnTWJvY2VVWHpiM2tuaXpQNGxxNzY4NVlJREE9PSIsImRldmljZVNpZ25hdHVyZSI6InVWUm9oTlJtcUlMOEc1NjJlRHc2R0tuUVlrVU90UndDQklHWGp6YXpRdUJ6d24wZkRTOERLVGNESlJjN3dYK0xxWkxCblhvM2ZzOW5aUEwzWWZIR2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzOTA0NDY4ODQ3OjU0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpGUWRvOE1Sbkdqd2R5M3BuOFpvbW5sazViMGgzaU1VYnozT2FxQ3c4Z00ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5NjE3MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWFEIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐓𝐎𝐌𝐌𝐘 𝐆𝐑𝐈𝐌𝐌 bad boy  ",
  packname: process.env.PACK_NAME || "Don't live for other 𝐓𝐎𝐌𝐌𝐘 𝐆𝐑𝐈𝐌𝐌 ",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝐓𝐎𝐌𝐌𝐘 𝐆𝐑𝐈𝐌𝐌",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
