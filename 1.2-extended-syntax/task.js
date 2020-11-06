"use script";


function getResult(a,b,c){
    let result = [];
    let d = Math.pow(b, 2) - (4 * a * c);

    if (d > 0) {
        result.push( (-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a) );
        // result[0] = (-b + Math.sqrt(d)) / (2 * a);
        // result[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        result.push(-b / (2 * a));
        // result = [- b / (2 * a)];
    } 
    return result;
}



function getAverageMark(marks){

    if (marks.length == 0) {
      console.log(`Входящие данные пустые.`);
      return 0;
    }

    if (marks.length > 5) {
      console.log(`Количество оценок: ${marks.length}. Подсчёт сокращён до пяти оценок.`);
      marks.splice(5);
    }

    let totalMark = 0;
    let averageMark = 0;

    for (let i = 0; i < marks.length; i++) {
      totalMark += marks[i];
    }

    averageMark = totalMark / marks.length;
    return averageMark;
}



 function askDrink(name, dateOfBirthday) {
     if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
         return (`Не желаете ли олд-фэшн, ${name}?`);
     }
     else {
         return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
     }
 }


// function askDrink(name, dateOfBirthday) {
//     let personsAge = dateOfBirthday.getFullYear();
//     let currentYear = new Date().getFullYear();

//     if ((currentYear - personsAge) >= 18) {
//         return `Не желаете ли олд-фэшн, ${name}?`
//     } else {
//         return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
//     }
// }



