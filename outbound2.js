// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
//const accountSid = 'AC20ba23fb4117ebd66dd710e2305d9943'; // test
//const authToken = 'ba5ebd75817c1f33cfdc0bf534f2195f'; // test
const accountSid = 'AC54c2dc42f931abf1d798dece18ed5591'; // live 
const authToken = '2ff75a5f3b9127bc745fd6eec8129524'; // live
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

//var VoiceResponse = client.twiml.VoiceResponse;
const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
response.dial('+16505333392');
response.say('test and Goodbye');

console.log(response.toString());

client.calls
      .create({
         url: 'https://raw.githubusercontent.com/swswsw/allebt/master/outbound2.xml',
         to: '+16505333392',
         from: '+14153407736'
       })
      .then(call => console.log(call.sid))
      .done();