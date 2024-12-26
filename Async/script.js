// const SetFun =function(){
// console.log("Hello");
// }
// setTimeout(SetFun,2000)

// const changedText=function(){
// document.querySelector('h1').innerHTML="Fucked Up"
// }
// const changeMe = setTimeout(changedText,2000)

// document.querySelector("#stop").addEventListener("click",function(){
// clearTimeout(changeMe)
// console.log("Clear Timeout Successfully");
// })

// const date=function(str){
// console.log(str,Date.now());}
// setInterval(date,1000,"hi") 
//setInterval() also have 3rd parameter

//? start interval by clicking a start and end interval using stop

// let intervalId;
// const interval=function(){
//     console.log("Hello");
//     }
// const SETint=document.getElementById("start").addEventListener("click",function(){
//    intervalId = setInterval(interval, 1000);
// })
// const clerInt=document.getElementById("stop").addEventListener("click",function(){
//     clearInterval(intervalId);
// })

//? Background Color Generator

const randomColor = function(){
    const Hex="0123456789ABCDEF";
    let color="#";
    for (let i =0;i<6;i++) {
        color +=Hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
const startChaningColor =function(){

    if(!intervalId){
        intervalId=setInterval(chnagedColor,1000)
    }

    function chnagedColor(){
    document.body.style.backgroundColor=randomColor()
    }
}
const stopChaningColor =function(){
    clearInterval(intervalId)
    intervalId=null;
}

document.querySelector("#start").addEventListener("click",startChaningColor)

document.querySelector("#stop").addEventListener("click",stopChaningColor)