var time = 0;
var timer = setInterval(()=>{
    time += 2;
    console.log(time + " has passes");
    if (time > 10)
    {
        clearInterval(timer);
    }
},2000);