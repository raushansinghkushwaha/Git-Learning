// const d = new Date();
// console.log(d.toDateString())
// console.log(d.toString())
// console.log(d.toISOString())

// console.log(d.getDate());
// //sun, mon, tue, wed, thu, fri, sat
// //0 ,1, 2, 3, 4, 5, 6  
// console.log(d.getDay()); 
// //jan , feb,mar
// //0 , 1 , 2 
// console.log(d.getMonth())
// console.log(d.getFullYear())
// console.log(d.getMilliseconds())
// console.log(d.getMinutes())
// console.log(d.getTime())
// const now = Date.now()
// console.log(now)


//Number :0 based start honge
//String: 1 based start honge
//const d = new Date("2022-10-20")
//year /month /Date / Hour/ Minute / Second / milisecond
// const date = new Date(2024,4,28, 10, 12,45,231)
// console.log(date.toDateString())

// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d.toLocaleDateString())


//Date calculation

// const date1 = new Date();
// const date2 = new Date("2025-04-21");
//difference between date is in milisecond
// console.log(date2-date1);

//count down time
//Days , hour, minute, second
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00")

const date=date2-date1;
const days = Math.floor( date/(1000*60*60*24));
const hour = Math.floor ((date/(1000*60*60))%24)

const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60)
console.log(`Olympics CountdownTime:Days:${days} hour:${hour} minute:${minute} second:${second}`)



 