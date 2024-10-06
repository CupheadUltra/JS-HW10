let helloButton = document.createElement('button');
helloButton.textContent = 'Click me';
document.body(helloButton);
helloButton.onclick = () => {
    alert('Hello World!');
};

let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let userGuess = parseInt(guessField.value);
    if (userGuess === randomNumber) {
        guessResult.textContent = 'Вітаємо! Ви вгадали число!';
    } else if (userGuess < randomNumber) {
        guessResult.textContent = 'Забагато. Спробуйте більше.';
    } else {
        guessResult.textContent = 'Замало. Спробуйте менше.';
    }
}

let clickCount = 0;
let message = document.createElement('p');
message.textContent = `Ви клікнули 0 разів на сторінці.`;
document.body.appendChild(message);
window.onclick = function() {
    clickCount++;
    message.textContent = `Ви клікнули ${clickCount} разів на сторінці.`;
};

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

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * (discount / 100));
    callback(discountedPrice);
};
const showDiscountedPrice = (price) => {
    console.log(`Discounted price: ${price}`);
};
calculateDiscountedPrice(100, 10, showDiscountedPrice);