// function checkAge(age) {
//     if (checkAge) {
//        checkAge = age >= 18;
//          }
//     }
//     console.log(`You are an adult`)
// let age;
//     function checkAge(age) {
//       age >= 18;
//     }
    
//     if (checkAge >= 18) {
//       console.log(`You are an adult`)
//       }
//  let age;
// function checkAge(age) {
//   age >= 18
//   }
//    if (age >= 18) {
//     console.log(`You are an adult`);
//     }

//     const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// let age;
// let checkAge;
// let age;
// function checkAge(age) {
//   if (checkAge = age >= 18) { 
//   return `You are an adult`;
//    }
//    }
//    age >= 18;
//    console.log(`You are an adult`);

//    const grade = 85;
// if (grade <= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }

// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }
// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

// function checkStorage(available, ordered) {
//   if (ordered >= available) {
//   return "Not enough goods in stock!";
// }
// else {
//   return "Order is processed, our manager will contact you";
// }
// }

// console.log(checkGrade(100, 50));
// console.log(checkGrade(150, 180));
// const grade = 85;

// if (grade >= 75) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// function checkStorage(available, ordered) {
//   if (ordered = 0){
//     return ("There are no products in the order!");
//   }
//   else if (ordered > available){
//     return ("Your order is too large, there are not enough items in stock!");
//   }
//   else {
//     return ("The order is accepted, our manager will contact you");
//   }
// }
// console.log(checkStorage(100, 50));

// let type;
// const age = 20;
// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }
// console.log(type); // 'adult'



// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//    return password == correctPassword ? "Access granted" : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// function getSubscriptionPrice(type){
//   const string = type; 
// switch (type){
//    case "starter":
//    return (`0`);
//    break;
//    case "professional":
//    return (`20`);
//    break;
//    case "organization":
//    return (`50`);
//    break;
//    default:
//    return ("Invalid subscription type!");
// }
// }

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// console.log(true && 3); // 3

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//       return "true";
//     } 
//     else {
//   return "false";
//     }
//   }
//   console.log(isNumberInRange(10, 30, 17)); 
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

// function getSubstring(string, length) {
//     return string.slice(0, length);
// };
//     console.log(getSubstring("Hello world", 5));

// function normalizeInput(input, to) {
//     const input = to;
//     switch (input) {
//       case 'upper':
//       return input.toUpperCase();
       
//     }
// }

//     if(to == "upper") {
//     return input.toUpperCase();
//   } else if(to == "lower") {
//     return input.toLowerCase();  
//   }
//   }
//   console.log(normalizeInput("This ISN'T SpaM", "upper"))
//   console.log(normalizeInput("This ISN'T SpaM", "lower"))

// function checkForName(fullName, firstName) {
//     fullName = fullName.toLowerCase();
//     firstName = firstName.toLowerCase();
      
    // if(fullName.includes(firstName)) {
    // return true;
    // } else if(!fullName.includes(firstName)) {
    //   return false;
    // }
    // }
    // Variant 2
// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// Console:
    // console.log(checkForName("Caty Stars", "Caty"))
    // console.log(checkForName("Jason Neis", "Jason"))
    // console.log(checkForName("Jason Neis", "Jacob"))
    // console.log(checkForName("Jason Neis", "jAsOn"))
    // console.log(checkForName("Caty Stars", "cAtY"))
    // console.log(checkForName("Caty Stars", "Andromeda"))

            // function checkPassword(password) {
            //     const correctPassword = "jqueryismyjam";                return password == correctPassword ? "Access granted" : "Access denied, wrong password!";
            //   }
            //   console.log(checkPassword("jqueryismyjam"));
            //   console.log(checkPassword("angul4r1sl1f3"));


//             console.log(checkFileExtension("index.html", ".css"));
//             console.log(checkFileExtension("styles.css", ".js"));
//             console.log(checkFileExtension("styles.css", ".css"));
//             console.log(checkFileExtension("app.js", ".js"));
//             console.log(checkFileExtension("app.js", ".html"));
// console.log();
// function getFileName(file) {
//     // Знаходимо позицію крапки
//     const dotIndex = file.indexOf('.');
//     // Якщо крапки немає, повертаємо файл без змін
//     if (dotIndex === -1) {
//       return file;
//     }
//     // Якщо крапка є, повертаємо частину рядка до неї
//     return file.slice(0, dotIndex);
//   }
//   console.log(getFileName("styles.css")); //styles
//   console.log(getFileName("app.js"));     //app
//   console.log(getFileName("app"));        //app
//   console.log(getFileName("index.js"));   //index
//   console.log(getFileName("index.html")); //index
//   console.log(getFileName("index.css"));  //index
//   console.log(getFileName("index"));      //index

// function createFileName(name, ext) {
//     // const trname= name.trim();
//     return name.trim() + "." + ext;
//   }
//   console.log(createFileName("report ", "csv"));

// function calculateTotal(number) {
//     let sumNumber = 0;
  
//     for(let i = 1; i <= number; i++){
//       sumNumber += i;
//     }
  
//     return sumNumber;
//   }
  
//   console.log(calculateTotal(100))

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);