const cities = ['Москва', 'Санкт-Петербург', 'Воронеж'];

function formatCities(cities) {
    return cities.join(', ') + '.';
}

console.log(formatCities(cities))

const citiesContainer = document.createElement('div');
citiesContainer.classList.add('results');
citiesContainer.innerHTML = 'Результат выполнения функции форматта городов: ' + formatCities(cities);

const firstTaskWrapper = document.querySelector('.first__task');
firstTaskWrapper.appendChild(citiesContainer);

const num = 41.7

function roundToFive(num) {
    return Math.round(num / 5) * 5;
}

const numberContainer = document.createElement('div');
numberContainer.classList.add('results');
numberContainer.innerHTML = 'Результат выполнения функции округления на 5, при числе (41.7) = ' + roundToFive(num);
const SecondTaskWrapper = document.querySelector('.second__task');
SecondTaskWrapper.appendChild(numberContainer);
console.log(roundToFive(num))

function CorrectCase(quantity) {
    let lastNumber = quantity % 10;
    let lastTwoNumbers = quantity % 100;
    if (lastTwoNumbers >= 5 && lastTwoNumbers <= 20) {
        return quantity + ' компьютеров';
    } else if (lastNumber === 1) {
        return quantity + ' компьютер';
    } else if (lastNumber >= 2 && lastNumber <= 4) {
        return quantity + ' компьютера';
    } else {
        return quantity + ' компьютеров';
    }
}



const CaseContainer = document.createElement('div');
CaseContainer.classList.add('results');
CaseContainer.innerHTML = 'Результат выполнения функции склонения = ' + CorrectCase(15) + ', ' + CorrectCase(41) + ', ' + CorrectCase(1048);

const ThirdTaskWrapper = document.querySelector('.third__task');
ThirdTaskWrapper.appendChild(CaseContainer);

console.log(CorrectCase(15) + ', ' + CorrectCase(41) + ', ' + CorrectCase(1048))

function normalNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const normalNumberContainer = document.createElement('div');
normalNumberContainer.classList.add('results');
normalNumberContainer.innerHTML = 'Результат выполнения функции проверки на нормальное число. Числа (1, 2, 5) = ' + normalNumber(1) + ', ' + normalNumber(2) + ', ' + normalNumber(9);

const FourthTaskWrapper = document.querySelector('.fourth__task');
FourthTaskWrapper.appendChild(normalNumberContainer);

console.log(normalNumber(1) + ', ' + normalNumber(2) + ', ' + normalNumber(5))

function sameElements(arr1, arr2) {
    let result = [];
    arr1.forEach(element => {
        if (arr2.includes(element) && arr1.filter(el => el === element).length >= 2 && arr2.filter(el => el === element).length >= 2 && !result.includes(element)) {
            result.push(element);
        }
    });
    return result;
}

const sameElementsContainer = document.createElement('div');
sameElementsContainer.classList.add('results');
sameElementsContainer.innerHTML = 'Результат выполнения функции проверки на одинаковые числа в массивах = ' + sameElements([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]);

const FifthTaskWrapper = document.querySelector('.fifth__task');
FifthTaskWrapper.appendChild(sameElementsContainer);

console.log(sameElements([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]))

