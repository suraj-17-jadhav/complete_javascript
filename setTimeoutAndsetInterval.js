let timer1 = setTimeout(`console.log("running timer-1")`,1000);
let timer2 = setTimeout(`console.log("running timer-2")`,3000);
let timer3 = setTimeout(`console.log("running timer-3")`,5000);

clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);

let time1 = setInterval(`console.log("running timer-1")`,1000);
let time2 = setInterval(`console.log("running timer-2")`,3000);
let time3 = setInterval(`console.log("running timer-3")`,5000);

clearInterval(time1);
clearInterval(time2);
clearInterval(time3);

// the outpu we get is the  3 ,3 ,3 
// this is because the var having the function scope so same variable i is shered in all iteration
for(var i=0 ;i<3; i++){
   setTimeout(function(){
      console.log(i);
   }, 1000);
}

// the output we get is the 1 ,2,3
// this is because the let is block scope variable so it does not shared in all iteration.
for(let i=0 ;i<3; i++){
    setTimeout(function(){
       console.log(i);
    }, 1000);
}


