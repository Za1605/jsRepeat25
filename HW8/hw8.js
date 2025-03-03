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


    //- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    //-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    //-- changeYear (newValue) - змінює рік випуску на значення newValue
    //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    function Car (model, manufacture,year,maxSpeed, capacity){
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
        this.driver = null;

        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };

        this.info = function (){
            console.log(`model- ${this.model},
                         manufacture - ${this.manufacture}
                         year - ${this.year}
                         maxspeed - ${this.maxSpeed}
                         capacity - ${this.capacity}`);

        };

        this.increaseMaxSpeed = function (newSpeed){
               this.maxSpeed += newSpeed;
               console.log(`максимальна швидкість - ${this.maxSpeed}`);
        };


        this.changeYear = function (newValue){
            this.year = newValue;
            console.log(`Рік випуску змінено на ${this.year}`);
        };

         this.addDriver = function (driver){
             this.driver = driver;

             console.log(`Водій ${driver.name} ${driver.age} ${driver.license} доданий до автомобіля `);
         };
    };
    const driver = {
        name:"John",
        age: 34,
        license: "AB123456",
    };

   const myCar = new Car("tesla", "Poland", 2020, 300, 3.0);
   console.log(myCar);
   myCar.drive();
   myCar.info();
   myCar.increaseMaxSpeed(50);
   myCar.changeYear(1999);
   myCar.addDriver(driver);
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