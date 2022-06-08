let arr = [0, 17, 76, null, 0, 597, "skillfactory", 0.5, 28, "Student", 2112, null, "miu"];

let zero=0;
let str=0;
let even=0;
let odd=0;
let nulls=0;

function array(){
    for (i = 0; i<arr.length; i++) {
        if (typeof arr[i] == 'string') {
        str++;
    } else if (arr[i]==null){
        nulls++;
    } else if (arr[i]==0) {
        zero++;
    } else if (arr[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }   
}
console.log(`В массиве: \n Нулей - ${zero} \n Строк - ${str} \n Null - ${nulls} \n Четных - ${even} \n Нечетных - ${odd}`)

}
array();