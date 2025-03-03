//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    //створити пустий масив, наповнити його 10 об'єктами new User(....)
   function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
   }

   let u2 = [
       new User(1,'Petro',"Ivanovich",'gmail.com', 3448899876 ),
       new User(6,'Ivan',"Ivanovich",'gmail.com', 3448899876 ),
       new User(4,'Seat',"Ivanovich",'gmail.com', 3448899876 ),
       new User(5,'Petro',"Ivanovich",'gmail.com', 3448899876 ),
       new User(3,'Lev',"Ivanovich",'gmail.com', 3448899876 ),
       new User(2,'Sasa',"Ivanovich",'gmail.com', 3448899876 ),
       new User(7,'Gena',"Ivanovich",'gmail.com', 3448899876 ),
];
console.log(u2);
    //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

      const filterUser = u2.filter(user => user.id % 2 === 0);
      console.log(filterUser);

  //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

      const sortId = u2.sort((a,b) => a.id - b.id);
      console.log(sortId);
      

    //- створити класс для об'єктів Client з полями id, name, surname , 
// email, phone, order (поле є масивом зі списком товарів)
    //створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id,name,surname,email,phone,order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
 let u3 = [
     new Client(1,'Petro',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange',]),
     new Client(6,'Ivan',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange', 'apple','muchrooms',]),
     new Client(4,'Seat',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange', 'apple','pop', 'papya',]),
     new Client(5,'Petro',"Ivanovich",'gmail.com', 3448899876,['tomato',] ),
     new Client(3,'Lev',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange', 'apple','dfsef','sdfd','fdf',]),
     new Client(2,'Sasa',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange', 'apple','dsd',]),
     new Client(7,'Gena',"Ivanovich",'gmail.com', 3448899876 ,['tomato', 'orange',]),
 ];
 console.log(u3);


    //- Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

     let sortClient = u3.sort((a,b)=> a.order.length - b.order.length);
     console.log(sortClient);


    //- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    //
    //
    //- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    //
    //
    //
    //-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
    //Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    //    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    //    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку