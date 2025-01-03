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
global.sudo = process.env.SUDO || "+221766034198";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUIrdXFkcnZYOEd1a3lPTHFNUXROdUo2NS9lNEFyd0VqOXQ2U05ZaUExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWhwRjVvUlJRQ1ZRZ1hPR2JVdzFqQ2NNaGcxL2IzcVFwMjFtRVVYNnFqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRkhXV3FTd0V4K3JzV1BST1d3dlI3S1Q2S3BIV0EwQXZyV0cyNThHc2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMEpBVkdHYkt4eTROYzhFWmtzWkp5bTdGOWd2SEJwK2x1cWdJcnc1aGc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMV2FlNTZJbVdjZTZlZzhaTDZDWktJb1JlMWRQdC9GS0RrMVFVWWF6WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNXUjJNQnNTT3dsNmxvVWNPREtaR1ZLSTBRWUFaa2tvZlZJRVVKaXZ2MGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUY2a1FWcjV5OUxUSmpzSTJHTlpVbmRhdUJNUkIvVExPNUhwdEUvZkxrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZng5VTlxcXFWeWlxUkxHckZ5MTdORGZyQUkxNXhLUCs5bmpSbS9Uc2puWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZjMEFkcXdPTENmb0RDdHdPcnl3cE1qM1RZcExVYXZDMWhxS1phM0MvVGc0SENVT0FYcnk5S3Zhd20zM2I1S1J5VUlaaDdLTFZxR1BRaGM4OVB2N2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJ0OWtlVndNZ2xHcDZYdnZRR2g3QTlXWjBrdWxKSVpaT3BIcW16MVFrZ01NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhSGRwbmxMVlM3ZW1UeGthTGk1bFRBIiwicGhvbmVJZCI6ImYwODFiMjdhLTdlMzItNDYzNi1iZGE2LTI2YWY2MjdjYzE2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVkVjOHhvOFNBTGJTOFp4Sm4yd3ZXRXVaLzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFE4cWcyRWxIYStmUHBNbndXb3dIbE55V21RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlKUkFRSllGIiwibWUiOnsiaWQiOiIyNDM5MDQ0Njg4NDc6NTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkI7wnZCM8J2QjPCdkJgg8J2QhvCdkJHwnZCI8J2QjPCdkIwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tHb3dZUUJFUFhOM2JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtWQjJqd3hHY2FQQjNMZW1meG1pYWVXVGx2U0hlSXhSdlBjNXFvTER5QXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNLQlo1M3NaMXpoYWtpdm5FUCtqZ1pwQjluM1RkZTM0b1F3Vng4VitIMjg3enVJQnJnTWZVcFdJMnRtZVdJTWwvTHVyTmlwZWoxSFA5M2RIMjNqbER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWYm4xc0daSDRNSEwzamo0S2VjS3R3OU9GNUtLSEJEWWdaRmNuMXNQM0xOcklhSDFZRzNIVHBUWXFJYTA0SFQ0dExVUnhqL3Y3cVg1eHZ6akJkWGpnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzkwNDQ2ODg0Nzo1MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaRlFkbzhNUm5HandkeTNwbjhab21ubGs1YjBoM2lNVWJ6M09hcUN3OGdNIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODc4NDAyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9hUSJ9"
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
