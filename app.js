let minutes=document.querySelector("#minutes");
let seconds=document.querySelector("#seconds");
let start=document.querySelector("#startBtn");
let stop=document.querySelector("#stopBtn");
let reset=document.querySelector("#resetBtn");

let myTimer;
let myCounter=0;
let mySeconds=0;
let myMinutes=0;

stopBtn.disabled = true;
resetBtn.disabled = true;

start.addEventListener('click',function(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;

    myTimer=setInterval(function(){
        myCounter++;
        mySeconds=myCounter;
        seconds.innerHTML=mySeconds;
        // seconds
        if(mySeconds>59)
        {
            seconds.innerHTML="00";
            myCounter = 0;
            myMinutes++;
            minutes.innerHTML=myMinutes;
    
        }
        else if (mySeconds>9)
        {
            seconds.innerHTML = mySeconds;
        }
        else{
            seconds.innerHTML= "0" + mySeconds;
        }
        // minutes
        if(myMinutes>59)
        {
            minutes.innerHTML="00";
            seconds.innerHTML="00";
            myCounter = 0;
            mySeconds=0;
            myMinutes=0;
            clearInterval(myTimer);
            
    
        }
        else if (mySeconds>9)
        {
            seconds.innerHTML = mySeconds;
        }
        else{
            seconds.innerHTML= "0" + mySeconds;
        }
    },1000)
 
})

stopBtn.addEventListener('click',function(){
    clearInterval(myTimer);
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

resetBtn.addEventListener('click',function(){
    startBtn.disabled = false;
    stopBtn.disabled= true;
    resetBtn.disabled = true;

    clearInterval(myTimer);
    minutes.innerHTML="00";
    seconds.innerHTML="00";
    myCounter = 0;
    mySeconds=0;
    myMinutes=0;
})

