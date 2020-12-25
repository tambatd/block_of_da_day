require('dotenv').config()
const Discord = require("discord.js");
var CronJob = require('cron').CronJob;
const client = new Discord.Client();

var dict = {
    Air: "https://static.wikia.nocookie.net/minecraft/images/0/08/Sky.png/revision/latest?cb=20110916220000",
    Stone: "https://static.wikia.nocookie.net/minecraft/images/d/d4/Stone.png/revision/latest?cb=20200825201332",
    Grass: "https://static.wikia.nocookie.net/minecraft/images/f/fe/GrassNew.png/revision/latest?cb=20190903234415",
    Dirt: "https://static.wikia.nocookie.net/minecraft/images/2/2f/Dirt.png/revision/latest?cb=20191019205301",
    Bedrock: "https://static.wikia.nocookie.net/minecraft/images/7/71/BedrockNew.png/revision/latest?cb=20190916224624",
    Water: "https://static.wikia.nocookie.net/minecraft/images/9/9b/Water%282%29.png/revision/latest?cb=20200413013836",
    Lava: "https://static.wikia.nocookie.net/minecraft/images/0/05/LavaCurrent.png/revision/latest?cb=20200225014052",
    Sand: "https://static.wikia.nocookie.net/minecraft/images/4/43/SandNew.png/revision/latest?cb=20190910000231",
    Gravel: "https://static.wikia.nocookie.net/minecraft/images/c/cd/GravelNew.png/revision/latest?cb=20190903231442",
    Gold_Ore: "https://static.wikia.nocookie.net/minecraft/images/d/d4/GoldOreNew.png/revision/latest?cb=20190907224653",
    Iron_Ore: "https://static.wikia.nocookie.net/minecraft/images/5/50/IronOreNew.png/revision/latest?cb=20190907225306"
};

var keys = Object.keys(dict);  
  var job = new CronJob('24 0 * * *', function() {
    client.login(process.env.TOKEN).then(() => {
      console.log("I am ready");
      let random = Math.floor(Math.random() * keys.length);
        let image = keys[random].toString()
        console.log(image);
        x = image;
        y = dict[image];
        console.log(dict["Stone"]);
        var block_name = (x+" "+y).toString();
      client.channels.cache.get('791400004425482240').send(x+" "+y);
    }); 
 }, null, true, 'America/Los_Angeles');
job.start();
