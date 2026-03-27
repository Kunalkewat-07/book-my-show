 const { sr_RS_latin } = require('@faker-js/faker');
const moment = require('moment-timezone')

// const timeZone = 'Europe/London';
// console.log(moment());
//  const utcTime =moment.tz('2026-02-19 06:31',timeZone).utc().format()
//  console.log(utcTime);
// console.log(moment.tz);

// console.log('america',moment().tz(timeZone).format("MMMM Do hh:mm:ss a"));

let time = new Date('2026-03-19T12:23:54')

let start  = moment.tz('2026-03-19T12:23:54','Europe/London')

console.log(moment.tz(start,'Asia/Kolkata'));

console.log(start.tz('Asia/Kolkata'));

// console.log(moment('2026-03-17','DD-MM-YYYY'))
// moment.tz.setDefault('America/New_York')

// console.log(moment().utc());

/* console.log(moment().subtract(1,'hour').calendar())
console.log(moment().calendar());


console.log(moment().utc('').tz('Asia/Kolkata')); 
*/

