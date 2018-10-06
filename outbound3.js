// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
//const accountSid = 'AC20ba23fb4117ebd66dd710e2305d9943'; // test
//const authToken = 'ba5ebd75817c1f33cfdc0bf534f2195f'; // test
const accountSid = 'AC54c2dc42f931abf1d798dece18ed5591'; // live 
const authToken = '2ff75a5f3b9127bc745fd6eec8129524'; // live
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://raw.githubusercontent.com/swswsw/allebt/master/outbound2.xml',
         to: '+14083726477',
         from: '+14153012420'
       })
      .then(call => console.log(call.sid))
      .done();
