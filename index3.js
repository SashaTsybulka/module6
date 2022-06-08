//Написать функцию, которая принимает число как аргумент и возвращает функцию, 
//которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//Выведите в консоль результат.

function sumFunc(a) {
    return function (b) {
       return a + b;
    }
 }
 console.log(sumFunc(5)(1));




 

 const sumFunc = a => {
   return function(b){
      return a +b;
   }
}

 console.log(sumFunc(5)(1));


