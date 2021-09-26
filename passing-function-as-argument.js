function callerFunction(fun){
    fun();
}
var sayHello = ()=>{
    console.log("Hello function!");
}

callerFunction(sayHello);
// the above is passing function as an argument