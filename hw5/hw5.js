//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const plPram = (a,b) => {
  return a*b;
};
console.log(plPram(4,10));
//- створити функцію яка обчислює та повертає площу кола з радіусом r

const plCrug = (radius) => {
  return Math.PI * Math.pow(radius,2);
};
console.log(plCrug(10));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const plCylindra = (h,r) => {
   Math.PI* Math.pow(r,2) + 2 * Math.PI *r *h
};
console.log(plCylindra(2,10));

//- створити функцію яка приймає масив та виводить кожен його елемент

const  arrNum=(array)=> array;
console.log(arrNum([11,22,33,44]));
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 const fooPar = (text)=> `<p>${text}</p>`;
 document.write(fooPar("Hello"));
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
   const creatUl = (text)=> `<ul>
                                      <li>${text}</li>
                                      <li>${text}</li>
                                      <li>${text}</li>
                                    </ul>`;


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

      const arrPrymNum = (array) => {
          const min = array.length;
          for (let i = 0; i <min; i++) {
              document.write(`<li>${array[i]}</li>`);
          }
      };
      arrPrymNum([NaN,22,true,false,"Hello"]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

    const arrObject = (array) => {
    for (const arrayElement of array) {
        for (const arrayElementKey in arrayElement) {
            document.write(`<div>${arrayElementKey}: ${arrayElement[arrayElementKey]}</div>`);
        }

    }
};

arrObject([{id: 21, name:"Halyna", age:"23"},
                 {id: 21, name:"Natalya", age:"76"},]);
//- створити функцію яка повертає найменьше число з масиву

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

