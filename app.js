var hour=0
var minute=0
var second=0
function StopWatch(){
    var Second=document.getElementById("Second").innerHTML=second.toString()+"second"
    var Minute=document.getElementById("Minute").innerHTML=minute.toString()+"minute"
    var Hour=document.getElementById("Hour").innerHTML=hour.toString()+"hour"
    second++
    if(second==60){
        minute++
        second=0
        if(minute==60){
            hour++
            minute=0
        }
    }
}

var interval
function Start(){
    interval= setInterval(StopWatch,1000)
    document.getElementById("Start").style.visibility="hidden"
}
function Pause(){
    clearInterval(interval)
    document.getElementById("Start").style.visibility="visible"

}
function Reset(){
    document.getElementById("Start").style.visibility="visible"
    second=0
    minute=0
    hour=0
    clearInterval(interval)
    document.getElementById("Second").innerHTML=second.toString()+"second"
    document.getElementById("Minute").innerHTML=minute.toString()+"minute"
    document.getElementById("Hour").innerHTML=hour.toString()+"hour"
}