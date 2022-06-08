
function interval(a,b){
    let number = a;
    
    let timerId = setInterval(function(){
      console.log(number);
      if (number == b){
        clearInterval(timerId);
      }
      number++;
    },1000)
  }
  
  interval(5,15);