//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
//Иначе говоря, умножает x на себя n раз и возвращает результат.
//Используйте Arrow Function синтаксис.


const funcPow = (x, n) => {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    console.log( funcPow(x, n) );
  }

