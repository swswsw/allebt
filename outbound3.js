// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
//const accountSid = 'AC20ba23fb4117ebd66dd710e2305d9943'; // test
//const authToken = 'ba5ebd75817c1f33cfdc0bf534f2195f'; // test
const accountSid = 'AC85ef88e084fba67f8e0481807f464f31'; // live 
const authToken = '941949f8bf57af4587f0d433c98fede1'; // live
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         record: true,
         url: 'http://raw.githubusercontent.com/swswsw/allebt/master/outbound3.xml',
         to: '+14083726477',
         from: '+14159961780'
       })
      .then(call => console.log(call.sid))
      .done();
