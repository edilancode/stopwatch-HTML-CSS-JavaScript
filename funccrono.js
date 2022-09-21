var sec = 00
var min = 00
var hour = 0
// var interval
function twoDigits(digit){
    if(digit <10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function ini(){
    watch()
    interval = setInterval(watch, 1000)

}

function interupt(){
    clearInterval(interval)

}
function end(){
    clearInterval(interval)
        sec = 0
        min = 0
    document.getElementById('watch').innerText = '00:00:00'

}
function watch(){
    sec++
    if (sec == 60){
      min++
      sec=0
      if(min==60){
          min=0 
          hour++
      }}
   
      document.getElementById('watch').innerText = twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec)
    
}