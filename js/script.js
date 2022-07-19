// Roller for Dice: 4
const diceFour = document.getElementById('d4');
diceFour.addEventListener('click', rollDFour);

let diceFourArray = [
    1,
    2,
    3,
    4,
];

function rollDFour() {
    let result = diceFourArray[Math.floor(Math.random() * diceFourArray.length)];
    console.log(result)
    return document.getElementById('r-d4').innerHTML = 'Result: ' + result;

}

// Roller for Dice: 6
const diceSix = document.getElementById('d6');
diceSix.addEventListener('click', rollDSix);

let diceSixArray = [
    1,
    2,
    3,
    4,
    5,
    6,
]

function rollDSix() {
    let result = diceSixArray[Math.floor(Math.random() * diceSixArray.length)];
    return document.getElementById('r-d6').innerHTML = 'Result: ' + result;
}

// Roller for Dice: 8
const diceEight = document.getElementById('d8');
diceEight.addEventListener('click', rollDEight);

let diceEightArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
]

function rollDEight() {
    let result = diceEightArray[Math.floor(Math.random() * diceEightArray.length)];
    return document.getElementById('r-d8').innerHTML = 'Result: ' + result;
}

// Roller for Dice: 10
const diceTen = document.getElementById('d10');
diceTen.addEventListener('click', rollDTen);

let diceTenArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]

function rollDTen() {
    let result = diceTenArray[Math.floor(Math.random() * diceTenArray.length)];
    return document.getElementById('r-d10').innerHTML = 'Result: ' + result;
}

// Roller for Dice: 12
const diceTwelve = document.getElementById('d12');
diceTwelve.addEventListener('click', rollDTwelve);

let diceTwelveArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
]

function rollDTwelve() {
    let result = diceTwelveArray[Math.floor(Math.random() * diceTwelveArray.length)];
    return document.getElementById('r-d12').innerHTML = 'Result: ' + result;
}

// Roller for Dice: 20
const diceTwenty = document.getElementById('d20');
diceTwenty.addEventListener('click', rollDTwenty);

let diceTwentyArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
]

function rollDTwenty() {
    let result = diceTwentyArray[Math.floor(Math.random() * diceTwentyArray.length)];
    return document.getElementById('r-d20').innerHTML = 'Result: ' + result;
}

