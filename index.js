const setClick = () => confirm("Press button");
const showMessage = (callback) => {
  let isClick = "";
  do {
    isClick = callback();
    if (isClick === false) {
      break;
    }
    console.log("Hello word");
  } while (true);
};
showMessage(setClick);

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let checkGuess = () => {
    let userGuess = parseInt(prompt("Введіть число від 1 до 100:"));
    
    if (userGuess === randomNumber) {
        alert("Ви вгадали правильне число!");
    } else  {
        alert("Не вірно."); 
    }
};
checkGuess();

let clickCount = 0;
let simulateClicks = () => {
    let userInput = prompt("Введіть 'клік', щоб натиснути, або 'стоп' для завершення:");
    while (userInput.toLowerCase() === 'клік') {
        clickCount++;
        alert(`Ви натиснули ${clickCount} раз(и)!`);
        userInput = prompt("Введіть 'клік', щоб натиснути знову, або 'стоп' для завершення:");
    }
    alert(`Загальна кількість кліків: ${clickCount}`);
};
simulateClicks();


const applyCallbackToEachElement = (arr, callback) => {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i]));
    }
    return resultArray;
}
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); 


const calculateDiscountedPrice = (price, discount, callback) =>
    callback((price / 100) * (100 - discount));
  const showDiscountedPrice = (totalPrice) => `До сплати ${totalPrice}`;
  const price = prompt("Введіть вартість товару");
  const discount = prompt("Введіть знижку");
  console.log(calculateDiscountedPrice(price, discount, showDiscountedPrice));