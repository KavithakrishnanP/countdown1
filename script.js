var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = " Happy Independence Day";
  } else {
    document.getElementById("countdown").innerHTML = timeleft ;
  }
  timeleft -= 1;
}, 1000);
  