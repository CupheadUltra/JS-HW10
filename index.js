
const hello = () => "Hello World!";
alert(hello());


const getRandomNumber = (max) => Math.floor(Math.random() * max);
const checkResult = (guessNumber) => {
    const realNumber = getRandomNumber(101);
    if(realNumber === guessNumber) return "Ура, ви вгадали!";
    else return "На жаль, ви не вгадали. Спробуйте знову. Загадане число - " + realNumber;
}
const guessNumber = Number(prompt("Вгадайте число від 0 до 100"));
alert(checkResult(guessNumber));


const howManyTimes = (count) =>{
    prompt("Ви натиснули кнопку " + count + " раз(разів)");
}
let count = 0;
while(true){
    howManyTimes(count);
    count++;
}


const squareCallback = (number) => number * number;
const applyCallbackToEachElement = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = squareCallback(arr[i]);
    }
    return arr;
}
const arr = [1, 2, 3, 4, 5];
console.log(applyCallbackToEachElement(arr, squareCallback));

// 5
const showDiscountedPrice = (price, discount) => price - discount * price/100;
const calculateDiscountPrice = (price, discount, callback) => showDiscountedPrice(price, discount);
console.log("Price with discount: " + calculateDiscountPrice(100, 25, showDiscountedPrice()));