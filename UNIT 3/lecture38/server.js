const EventEmitter=require('events');
const emitter=new EventEmitter();
function bellRang(){
    console.log("bell has been rung!")
}
//  emitter.once("bell-rang",()=>{
//    console.log("Bell has been rung!");
// });

emitter.on("bell-rang",()=>{
     console.log("Bell has been rung!");
 });
//  emitter.on("bell-rang",()=>{
//     console.log("Teacher starts the class!")
// })
// emitter.on("bell-rang",()=>{
//     console.log("Students start entering the class!")
// })
emitter.emit("bell-rang");
emitter.off("bell-rang",bellRang)
emitter.emit("bell-rang");