//Блок задач 1

//Задача 1) Периметр P = 4*a;

  //Вариант 1 (лаконичный);
 /*
      let a = prompt ('Считаем периметр квадрата. Чему равна сторона?', '');
      alert( `Периметр квадрата равен ${4 * +a}` );
 */

  //Вариант 2 (Читаемый);
 /*
      let a = prompt ('Считаем периметр квадрата. Чему равна сторона?', '');
      let p = 4 * +a;
      alert(p);
 */


//Задача 2) Площадь S = a^2;

  //Вариант 1 (лаконичный);
 /* 
         let a = prompt ('Считаем площадь квадрата. Чему равна сторона?', '');
         alert( `Площадь квадрата равна ${a ** 2}` );
 */ 

  //Вариант 2 (Читаемый);     
 /*
         let a = prompt ('Считаем площадь квадрата. Чему равна сторона?', '');
         let p = a ** 2;
         alert( p );
 */


//Задача 3) n^2;      

 /*

 let a = prompt ('Возводим число в степень 3. Введите число?', '');
 let p = a ** 3;
 alert( p );

 */


//Задача 4) n^m;

 /* 
    let a = prompt ('Возводим число А в степень Б. Введите число А', '');
    let b = prompt ('Введите число Б','');
    let c = a ** b;
    alert (c);
 */


//Задача 5) Приветствие пользователя, запрашивая его имя;

 /*
    let name = prompt ('Как вас зовут?', '');
    alert (`Здравсвуй ${name} !`);
 */


//Задача 6) Принять число и вывести последнюю цифру;

/* 

     let someNumber = prompt ('Введите число и я покажу последнюю цифру','');
     alert (`Последняя цифра ${someNumber % 10} !`);
*/


//Задача 7) Ввести 2-значное число. Вывести сумму цифр и умножение;

 /* 
     let a = prompt ('Введите двузначное число', '');
     let b = a % 10;
     let c = (a - b) / 10;
    
     alert (`Произведение цифр будет равно ${b * c} `);
     alert (`Сумма цифр будет равна ${b + c} `);
 */

//Задача 8) Ввести 3-значное число. Вывести сумму цифр;
 /*
     let a = prompt ('Найдем сумму цифр. Введите 3-значное число', '');
     let b = a % 10;
     let c = (((a - b) / 10) % 10);
     let d = (a - b - (c * 10)) / 100;

     //alert (a)
     //alert (b)
     //alert (c)
     //alert (d)

     alert (`Сумма цифр будет равна ${b + c + d} `);
 */


//Задача 9) Ввести 3-значное число. Вывести число в обратном порядке;
 
 //Вариант 1, тут как-то сложно получилось, хочу придумать проще.
 // Поищу как преобразовать число в строку.

 /*
     let a = prompt ('Напишу 3-значное число в обратном порядке, пиши число','');
     let b = a % 10;
     let c = (((a - b) / 10) % 10);
     let d = (a - b - (c * 10)) / 100;
     
     //let e = "d";
     //let f = "c";
     //let g = "b";

     //alert (e);
     //alert ();

     alert (`Наоборот будет ${(b * 100) + (c * 10) + (d)}`);

 */

 //Вариант 2
 /*
     let a = prompt ('Напишу 3-значное число в обратном порядке, пиши число','');
     let b = a % 10;
     let c = (((a - b) / 10) % 10);
     let d = (a - b - (c * 10)) / 100;

     b = String( b );
     c = String( c );
     d = String( d );

     //alert (b + c + d);
     alert (`Наоборот будет ${b + c + d}`);
 */


//Блок задач 2

//Задача 1 А

/*
let a = prompt ('Напишите число, если оно положительное, то выведу его','');

if (a > 0) {
alert (a);
}  else {
    alert ('Это не положительное число');
}

*/

//Задача 1 Б

/*

let a = prompt ('Напишите число','');

    if ( a > 0 ) {
    alert ('Положительное число');
}  else if ( a < 0 ) {
    alert ('Отрицательное число');
}  else {
    alert ('Это 0');
}

*/

//Задача 1 В

/*

let a = prompt ('Напишите число','');

     if (a % 2 == 0) {
         alert ('Четное');
     } else {
         alert ('Нечетное');
     }

*/

//Задача 2 А

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');

    if (a > b) {
        alert (b);
    } else if (a < b){
        alert (a);
    } else {
        alert ('Числа равны');
    }

*/


//Задача 2 А v2

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');

    (a > b) && alert (b);
    (a < b) && alert (a);

*/

//Задача 2 Б

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');


    (a / b) && alert (a / b);

*/

//Задача 3 

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
//alert ('Справедливы ли неравенства A > 2 и B ≤ 3');

//alert (!!(a > 2));

//alert (`Справедливо ли неравенство A > 2 ${!!(a > 2)} `);
//alert (`Справедливо ли неравенство B ≤ 3 ${!!(b <= 3)} `);

alert (` A > 2 ${!!(a > 2)} `);
alert (` B ≤ 3 ${!!(b <= 3)} `);

*/

//Задача 4

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

     alert (` a < b ${!!(a < b)} `);
     alert (` b < c ${!!(a < b)} `);

*/

//Задача 5

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

     alert (` Среднее число ${(+a + +b + +c) / 3} `);

*/


//Задача 6

/*

alert ('Проверим есть ли хоть одно нечетное число');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
    
let c = a % 2 != 0 //Ввожу параметр 'c' для проверки на нечетность
let d = b % 2 != 0 //Ввожу параметр 'd' для проверки на нечетность

    alert (c || d); // Если есть хоть одно верное значение - true
                    // Если оба не верны - false

*/

//Задача 7

/*

alert ('Проверим, что каждое из чисел A и B нечетное');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');

let c = a % 2 != 0; //Ввожу параметр 'c' для проверки на нечетность
let d = b % 2 != 0; //Ввожу параметр 'd' для проверки на нечетность

    alert (c && d); // Только если оба значения верны - true

*/

//Задача 8

/*

alert ('Ровно одно из чисел A и B нечетное');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
    
let c = a % 2 != 0; //Ввожу параметр 'c' для проверки на нечетность
let d = b % 2 != 0; //Ввожу параметр 'd' для проверки на нечетность

if (c && d){
    alert ( !!0 ); //Вывожу false если оба параметра верны
} else{
    alert (c || d); //Выводит true если один из параметров true
}

*/

//Задача 9

/*

alert ('Числа A и B имеют одинаковую четность');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');

let c = a % 2 != 0; // Два нечетных параметра
let d = b % 2 != 0; 

let e = a % 2 == 0; // Два четных параметра
let f = b % 2 == 0; 

    alert (c && d || e && f);

*/

//Задача 10

/*

alert ('Каждое из чисел A, B, C положительное');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

    alert (a > 0 && b > 0 && c > 0);

*/

//Задача 11

/*

alert ('Хотя бы одно из чисел A, B, C положительное');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

    alert (a > 0 || b > 0 || c > 0);

*/

//Задача 12

/*

alert ('Ровно два из чисел A, B, C являются положительными');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

let ab = (a > 0 && b > 0);
let bc = (b > 0 && c > 0);

alert (ab + bc == 1);

*/

//Задача 13

/*

alert ('Данное число является четным двузначным');

let a = prompt ('Напишите число a','');

alert ( a > 9 && a < 100 && a % 2 == 0 );

*/

//Задача 14

/*

alert ('Все цифры данного (трехзначного) числа различны');

let a = prompt ('Напишите число a','');

let num3 = a % 10; //123 = 3
let num2 = ((a - num3) / 10) % 10; //123 = 2
let num1 = ((a - num3) - (num2 * 10)) / 100; // 123 = 1

alert (num1 != num2 && num2 != num3 && num3 != num1);

*/

//Задача 15

/*

let n = prompt ('Напишите число','');

if (n > 0) {
    alert (++n);
} else {
    alert (n - 2);
}

*/

//Задача 16

/*

alert ('Найдем количество положительных и количество отрицательных чисел');

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');
let c = prompt ('Напишите число c','');

let numPlus = 0;
let numMinus = 0;

if (a > 0) {++numPlus} 
if (b > 0) {++numPlus} 
if (c > 0) {++numPlus} 

if (a < 0) {++numMinus}
if (b < 0) {++numMinus}
if (c < 0) {++numMinus}

alert (`Положительных чисел ${numPlus}`);
alert (`Отрицательных чисел ${numMinus}`);

*/

//Задача 17

/*

let a = prompt ('Напишите число a','');
let b = prompt ('Напишите число b','');

let moreNum, lessNum;

if (+a > +b) {

    moreNum = a;
    lessNum = b;

    alert (`a > b`);

} else if (+a < +b) { //Преобразовал в числа т.к. число с пробелом > такого же числа без пробела.

    moreNum = b;
    lessNum = a;

    alert (`a < b`);

} else {

    alert (`Они равны. Вычесления остановлены`);
}

if (lessNum % 2 == 0) {

    alert (`Результат ${lessNum * moreNum}`);

} else {

    alert (`Результат ${moreNum * 4}`);
}

*/



//Блок 3 Switch Пропускаю и берусь за блок 4 с Циклами


//Задача 1)Даны целые числа K и N (N > 0). Вывести N раз число K.

/*

alert ('Выведем число N, K раз');

let k = prompt ('Введите число K (K > 0)','');
let n = prompt ('Напишите число N (N > 0) ','');

doNothing:

for ( ; k > 0; k--) {

    if (n <= 0) continue doNothing; // Добавлена строчка, т.к. по условию N > 0 

    alert ( n );
}

*/


//Задача 2)Дано число n. Вывести все числа от 1 до n

/*

alert ('Выведу все числа от 1 до N'); // Выполнил включая N 

let n = prompt ('Введите число N', '');

for (let i = 1; i <= n; i++) alert ( i ); //Если N отрицательное, то цикл не заработает

// Интересно сделать условие для выполнения цикла, чтобы срабатывал 
// альтернативный цикл для отрицательного значения

*/
/*

alert ('Выведу все числа от 1 до N'); 

let n = prompt ('Введите число N', '');

for (let i = 1; i <= n; i++) alert ( i ); {
    
    for (let j = 1; j >= n; j--) alert ( i );
}   // Справился

*/


// Задача 3)Дано число n. Вывести все числа от n до 1

/*

alert ('Выведу все числа от N до 1'); 

let n = prompt ('Введите число N', '');

for (let i = 0; i < n ; n--) alert ( n );  {
    for (let j = 0; j > n; n++) alert ( n );
}

*/


// Задача 4)Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B
//	(включая сами числа A и B),  а также количество N этих чисел.

/*

alert ('Выведу все числа от A до B и покажу их количество, при условии (A < B)');

let a = prompt ('Введите число A', '');
let b = prompt ('Введите число B', '');

for ( j = a; j <= b; j++ ) alert ( j );

alert ( `Всего чисел было ${b - a + 1}` );

*/


// Задача 5)Дано вещественное число  —  цена  1кг конфет. Вывести стоимость  1,  2, ..., 10 кг конфет.

/*

alert ("Посчитаем стоимость конфет за 1 - 10кг");

let a = prompt ('Введите сумму за 1кг конфет','');

for ( j = 1; j <= 10; j++) alert (`${j * a} за ${j} кг`);

*/


// Задача 6)Дано число n. Найти сумму чисел от 1 до n

/*

alert ("Надем сумму чисел от 1 до N");

let n = prompt ('Введите N','');
let num = 0;

for ( j = 1 ; j <= n ; j++) {
num += j;
}

alert (num); // Если алерт положить в цикл, то вывод будет на каждой итерации

*/


// Задача 7)Дано число n. Найти n! (Факториал)

/*

alert ("Надем факториал, !N");

let n = prompt ('Введите N','');
let num = 1;

for ( j = 1 ; j <= n ; j++) {
num *= j;
}

alert (num);

*/


//  Задача 8)Дано целое число N (> 0). Найти сумму 1 + 1/2 + 1/3 + ... + 1/N

/*

alert ("Найдем сумму 1 + 1/2 + 1/3 + ... + 1/N");

let n = prompt ('Введите N','');
let num = 0; // 0 потому, что на строке (*)в первой итерации будет 0 + 1/1;

for ( j = 1 ; j <= n ; j++) {
    num = num + (1 / j); // (*)
    }
    
    alert (num);

*/


// 9)Дано вещественное число A и целое число N (> 0). Найти A в степени N:  A^N = A·A· ... ·A(числа A перемножаются N раз).

/*

alert ("Найдем A^N через цикл");

let a = prompt ('Введите вещественное число A','');   // 2
let n = prompt ('Введите целое число N ( > 0 ) ',''); // 3
let num = a; // 2

for ( j = 1 ; j < n ; j++) { // количество итераций (A * A) должно быть равно N
    
    num = num * a; // 2 * 2, 4 * 2, 8 * 2

}

alert (num);

*/


// Задача 10*)Дано число n. Найти 1!+2!+3!+...+n!

/*

alert ("Найдем сумму факториалов 1!+2!+3!+...+n!");

let n = prompt ('Введите N','');
let num = 1;
let sum = 0;

for ( j = 1 ; j <= n ; j++) {
num *= j;
sum += num;
}

alert (`Просто N! = ${num}`); // Выводит просто факториал N!
alert (`Сумма всех факториалов равна ${sum}`); // Выводит сумму всех факториалов, как требует задача

*/


// Задача 11*)Дано целое число n. Найти сумму цифр этого числа.

//

//Пробую в примере на цифрах

/*

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;

*/

//Можно сделать как в примере выше, только форме do...while, чтобы выполнился 
// последний "лишний" цикл. А в условие "вшить" n < 10, когда число станет однозначным.
// Т.е. условие выполнится, когда станет ложным, как раз на однозначном варианте.


/*

let a, b, c;
let n = 1234;
let sum = 0;

a = 1234 % 10; // 4
b = 1234 - a;  // 1230
c = b / 10;    // 123

sum = sum + a;

// Попробую сделать сам цикл

*/


/*

alert ('Найдем сумму чисел заданного числа')

let a,b;
let sum = 0;
let n = prompt ('Введите число ','');

do {
    a = n % 10;
    n = (n - a) / 10;

    sum += a;

    //alert ( sum );

} while ((n / 10) > 0);

alert ( sum );

*/


/*
// Готовый рабочий вариант

let a;
let sum = 0;
let n = prompt ('Введите число ','');

while ((n / 10) > 0) {

    a = n % 10;
    n = (n - a) / 10;

    sum += a;
} 

alert ( sum );

*/


// Задача 12*)Дано целое число n. Перевернуть это число.//одним циклом

/*

let a;
let sum = '';
let n = prompt ('Введите число ','');

while ((n / 10) > 0) {

    a = n % 10;
    n = (n - a) / 10;

    sum += String(a);
} 

alert ( sum );

*/


// Задача 13**)Дано целое число n и m-номер цифры, которую нужно удалить из числа.
		//	1) m с конца(без цикла)
		//	2) m с начала

// 13.1

/*

// m удалить с конца не используя цикл. Значит сравню последнюю цифру с m;

let n = prompt ('Введите целое число N');
let m = prompt ('Введите последнее число от числа N');
let result;

result = n % 10


if (result ==  m) {

    n = (n - result) / 10;
    alert (`Получается ${n}`);
}

*/


/*

alert ('Удалим последнюю цифру от вашего числа (целого)');

let n = prompt ('Введите целое число N');
let m;

    m = n % 10;
    n = (n - m) / 10;
    alert (`Получается ${n}`);

*/


// 13.2

/*

let a, sum;
let revNum = '';
let n = prompt ('Введите число ','');

while ((n / 10) > 0) {

    a = n % 10;
    n = (n - a) / 10;

    revNum += String(a);
    sum = a;
} 

    n = (revNum - sum) / 10;

    revNum = '';

while ((n / 10) > 0) {

    a = n % 10;
    n = (n - a) / 10;

    revNum += String(a);
}
    alert ( revNum );

*/


// Задача 14)Дано вещественное число A и целое число N (> 0). Используя один цикл, найти сумму 1 + A + A^2 + A^3 + ... + A^N.

/*

let a = prompt ('Введите вещественное число A', '');
let n = prompt ('Введите целое число N ( N > 0)', '');
let sum = 1;

for (i = 1; i <= n; i++) {

    sum = sum + (a ** i); 
}
    alert ( sum );

*/


// Задача 15)Дано вещественное число A и целое число N (> 0). Используя один цикл, найти значение выражения 1 – A + A^2 – A^3 + ... + (–1)^N·A^N.  Условный оператор не использовать.

/*

let a = prompt ('Введите вещественное число A', '');
let n = prompt ('Введите целое число N ( N > 0)', '');
let sum = 1;
let zero;

for (i = 1; i <= n; i++) {

    zero = - (i % 2 == 0) - -(i % 2 != 0); // При четном возвращает (-1), при нечетном (1);

    sum = sum - ( zero * (a ** i)); // При нечетном значении (sum - ..), при четном т.к. минус(-) на минус(-) дает плюс(+) (sum + ..).
  
}
    alert ( sum ); 

*/


//
//
// Уже позже я вспомнил о функции (-1) ^ в чётной(+) и нечетной(-) степени.
//
//


// Задача 16)Дано вещественное число X и целое число N  (>  0).  Найти значение выражения 1 + X + X^2/(2!) + ... + X^N/(N!)//одним циклом

/*

let a = prompt ('Введите вещественное число X', '');
let n = prompt ('Введите целое число N ( N > 0)', '');
let sum = 1;
let factorial = 1;
let degree;

for (i = 1; i <= n; i++) {

    degree = a ** i;
    factorial *= i;

    sum = sum + degree / factorial; 
}
    alert ( sum );

*/


// Задача 17)Дано вещественное число X и целое число N  (>  0).  Найти значение выражения X – X^3/(3!) + X^5/(5!) – ... + (–1)^N·X^(2·N+1)/((2·N+1)!) 

/*

let a = +prompt ('Введите вещественное число A', '');
let n = +prompt ('Введите целое число N ( N > 0)', '');
let sum = a;
let factorial = 1;
let minus, degree;

for (i = 1; i <= n; i++) {

    // Раскалыдваю формулу для читаемости;
    // + (-1) ^N * A ^(2 * N + 1) / ((2 * N + 1));

    minus = (-1) ** i;
    degree = a ** (2 * i + 1);
    factorial *= (2 * i + 1);

    sum += minus * degree / factorial;

    //alert ( sum );
}
    alert ( sum );

*/


// Задача 18)Дано вещественное число X и целое число N  (>  0).  Найти значение выражения 1 – X^2/(2!) + X^4/(4!) – ... + (–1)^N·X^(2·N)/((2·N)!)

/*

let a = +prompt ('Введите вещественное число A', '');
let n = +prompt ('Введите целое число N ( N > 0)', '');
let sum = 1;
let factorial = 1;
let minus, degree;

for (i = 1; i <= n; i++) {

    // Раскалыдваю формулу для читаемости;
    // + (-1) ^N * A ^(2 * N + 1) / ((2 * N + 1));

    minus = (-1) ** i;
    degree = a ** (2 * i);
    factorial *= (2 * i);

    sum += minus * degree / factorial;

   }
    alert ( sum );

*/


// Задача 19)Дано число n. Вывести простое оно или нет

/*

let num = +prompt('Введите число');

let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break; 
	}
}

alert (flag);

*/


// Задача 20)Ввели число n. Вывести n-е Число Фибонначи 1 1 2 3 5 8...

/*

let fib = +prompt ('');
let a = 0; 
let b = 1;
let c, meter;

for (let i = 2; i <= fib; i++){
    c = a + b;
    a = b;
    b = c;

   // alert (c);
}
alert (c);

*/


// Задачи 21-26 Перенесены во "Вложеные циклы" и будут дальше


// Задача 27)Найти все числа некратные пяти и кратные 3, и сумма цифр которых