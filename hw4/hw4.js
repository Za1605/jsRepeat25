//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sOne(a,b) {
    return a*b;
}

let S1 = sOne(5,5);
console.log(S1);


//- створити функцію яка обчислює та повертає площу кола з радіусом r
function STwo(radius) {
    return Math.PI *Math.pow(radius, 2);
}
let Stwo1 = STwo(10);
console.log(Stwo1);
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sThree(r,h) {
    return Math.PI * Math.pow(r,2) + 2* Math.PI * r * h;
}
console.log(sThree(3,5));
//- створити функцію яка приймає масив та виводить кожен його елемент

function fooArr(arr) {
    return arr;
}

console.log(fooArr([10,20,30,40]));


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function fooPar(text) {
  document.write( `<p>${text}</p>`);
}

fooPar('Hello');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

creatLi('How are you');

function creatLi(text) {
    document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                   </ul>`);
}
//- створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function fooLi(text,many) {
    for (let i = 0; i <many; i++) {
        document.write(`<li>${text}</li>`);
    }
}
fooLi('Kiss you', 8);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
   function fooNumArr(num,arr) {
       const length = Math.min(num,arr.length);
       for (let i = 0; i < length; i++) {
           document.write(`<li>${arr[i]}</li>`);

       }
   }
   fooNumArr(17,[undefined,'hello',true,NaN,false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//Для кожного об'єкту окремий блок.
function fooArr(...arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement}</div>`);
    }
}
fooArr([12,13,12,16,88]);

//- створити функцію яка повертає найменьше число з масиву

function fooMin(array) {
    let min = array[0];
    for (const arrayElement of array) {
        if
            ( arrayElement < min ){
             min = arrayElement;
            }
        }
            return min;


    }
console.log(fooMin([33,44,55,88,99,54]));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів
// масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArray(arr) {
    let firsNum = 0;
    for (const firsNumElement of arr) {
           firsNum += firsNumElement;
    }
    return firsNum;
}

console.log(sumArray([11,8,4,67]));

//- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(array,index1,index2) {
    
}

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250