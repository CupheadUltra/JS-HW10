
let helloBtn = document.createElement('button');
helloBtn.textContent = 'Click me';
document.body.appendChild(helloBtn);

let message = document.createElement('p');
document.body.appendChild(message);

helloBtn.addEventListener('click', () => {
    message.textContent = 'Hello World!';
});

let randomNumber = Math.floor(Math.random() * 100) + 1;

let userGuessInput = document.createElement('input');
userGuessInput.type = 'number';
userGuessInput.placeholder = 'Введіть число';
document.body.appendChild(userGuessInput);

let checkGuessBtn = document.createElement('button');
checkGuessBtn.textContent = 'Перевірити';
document.body.appendChild(checkGuessBtn);

let resultMessage = document.createElement('p');
document.body.appendChild(resultMessage);

checkGuessBtn.addEventListener('click', () => {
    let guess = Number(userGuessInput.value);
    if (guess === randomNumber) {
        resultMessage.textContent = 'Ви вгадали!';
    } else if (guess > randomNumber) {
        resultMessage.textContent = 'Забагато!';
    } else {
        resultMessage.textContent = 'Замало!';
    }
});

let clickCount = 0;
let clickCountMessage = document.createElement('p');
clickCountMessage.innerHTML = 'Ви клікнули <span id="clickCount">0</span> разів на цій сторінці.';
document.body.appendChild(clickCountMessage);
let clickCountDisplay = clickCountMessage.querySelector('#clickCount');
document.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});

let processArray = (arr, callback) => {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i]));
    }
    return resultArray;
};
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = processArray(numbers, (num) => num * num);
console.log(squaredNumbers);

let calculateDiscountedPrice = (price, discount, callback) => {
    let discountedPrice = price - (price * (discount / 100));
    return callback(discountedPrice);
};
let finalPrice = calculateDiscountedPrice(100, 20, (price) => {
    return `Дисконтна ціна: ${price.toFixed(2)} грн.`;
});
console.log(finalPrice); 
