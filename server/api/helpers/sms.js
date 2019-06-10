require('dotenv').config();
const accountSid = "AC769bb9a285657f3bfee075037fa84df1";
const authToken = "96f51dce68425b414e6c2a69268743ef";
const client = require('twilio')(accountSid, authToken);


exports.sendSMS = (bodytext, number) => {
  client.messages
      .create({
        body: bodytext,
        from: '+16623378513',
        to: number,
      })
      .then((message) => console.log(message.sid))
      .done();
};
