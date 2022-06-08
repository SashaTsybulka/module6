function isPrime(num) {
  let symple = 'Простое', notSymple = 'Не простое', wrong = 'Данные не верны';

  if (num <= 1) {
     return notSymple;
  }else if (num > 1000) {
     return wrong;
  };
  for (let i = 2; i <= num / 2; i++) {
     if (num % i === 0) {
        return notSymple;
     }
  }
  return symple;
}
console.log(isPrime())