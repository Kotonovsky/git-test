// Задача 1) Тебе ввели число. 
// а) Вывести его если оно положительное

    /*

    let a = prompt ('Напишите число, если оно положительное, то выведу его','');

    if (a > 0) {
    alert (a);
    }   else {
        alert ('Это не положительное число');
    }

    */

// Задача 1) Тебе ввели число. 
// б) Если положительное вывести "положительное", если меньше нуля вывести "отрицательное", иначе написать "это ноль"

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

// Задача 1) Тебе ввели число. 
// в) Проверить четное ли оно. Если четное, то вывести "Четное", иначе "Нечетное"

    /*

    let a = prompt ('Напишите число','');

        if (a % 2 == 0) {
            alert ('Четное');
        } else {
            alert ('Нечетное');
        }

    */

// Задача 2) Тебе ввели 2 числа. 
// а) Найти меньшее из них

//v1

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


//v2

    /*

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');

        (a > b) && alert (b);
        (a < b) && alert (a);

    */


// Задача 2)Тебе ввели 2 числа. 
// б*)проверить делится ли 1ое число на 2е

    /*

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');


        alert (a % b == 0);

    */


// Задача 3) Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3». 

    /*
    

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');

    alert (` A > 2 и B ≤ 3 ${ (a > 2) && (b <= 3) } `);

    */


// Задача 4) Даны три целых числа: A, B, C. Проверить истинность высказывания: «A < B и В < C».


    /*

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
    let c = prompt ('Напишите число c','');

        alert (` A < B и B < C ${ (a < b) && (b < c) } `);

    */


// Задача 5*) Даны три целых числа: Найти среднее из них и вывести

    /*

    let a = prompt ('Напишите число A','');     
    let b = prompt ('Напишите число B','');     
    let c = prompt ('Напишите число C','');     
    let averageNumber;

            if  (((a > b) && (a < c)) || ((a < b) && (a > c))) {            // если среднее A
                averageNumber = a;
            } else if  (((b > a) && (b < c)) || ((b < a) && (b > c))) {     // если среднее B
                averageNumber = b;
            } else  {                                                       // остается C
                averageNumber = c;
            } 

    alert (` Среднее число ${averageNumber} `);

    */


// Задача 6) Даны два целых числа: A, B. Проверить истинность высказывания: «Хотя бы одно из чисел A и B нечетное».

    /*

    alert ('Проверим есть ли хоть одно нечетное число');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
        
        alert ((a % 2 != 0) || (b % 2 != 0));   // Если есть хоть одно верное значение - true
                                                
    */


// Задача 7) Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное». 

    /*

    alert ('Проверим, что каждое из чисел A и B нечетное');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');

    let c = a % 2 != 0; //Ввожу параметр 'c' для проверки на нечетность
    let d = b % 2 != 0; //Ввожу параметр 'd' для проверки на нечетность

        alert ((a % 2 != 0) && (b % 2 != 0)); // Только если оба значения верны - true

    */


// Задача 8*) Даны два целых числа: A, B. Проверить истинность высказывания: «Ровно одно из чисел A и B нечетное».

    /*

    alert ('Ровно одно из чисел A и B нечетное');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
        
    alert ( ((a % 2 == 0) && (b % 2 != 0)) || ((a % 2 != 0) && (b % 2 == 0)) )

    */


// Задача 9*) Даны два целых числа: A, B. Проверить истинность высказывания: «Числа A и B имеют одинаковую четность».

    /*

    alert ('Числа A и B имеют одинаковую четность');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');

        alert ((a % 2 != 0) && (b % 2 != 0) || (a % 2 == 0) && (b % 2 == 0));

    */


// Задача 10) Даны три целых числа: A, B, C. Проверить истинность высказывания: «Каждое из чисел A, B, C положительное». 

/*

    alert ('Каждое из чисел A, B, C положительное');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
    let c = prompt ('Напишите число c','');

        alert ((a > 0) && (b > 0) && (c > 0));

    */


// Задача 11) Даны три целых числа: A, B, C. Проверить истинность высказывания: «Хотя бы одно из чисел A, B, C положительное».

    /*

    alert ('Хотя бы одно из чисел A, B, C положительное');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
    let c = prompt ('Напишите число c','');

        alert (a > 0 || b > 0 || c > 0);

    */


// Задача 12*) Даны три целых числа: A, B, C. Проверить истинность высказывания: «Ровно два из чисел A, B, C являются положительными».

    /*

    alert ('Ровно два из чисел A, B, C являются положительными');

    let a = prompt ('Напишите число a','');
    let b = prompt ('Напишите число b','');
    let c = prompt ('Напишите число c','');


    alert ( (a > 0 && b > 0 && c <= 0) || (a > 0 && b <= 0 && c > 0) || (a <= 0 && b > 0 && c > 0));

    */


// Задача 13*) Дано целое положительное число. Проверить истинность высказывания: «Данное число является четным двузначным».

    /*

    alert ('Данное число является четным двузначным');

    let a = prompt ('Напишите число a','');

    alert ( (a > 9) && (a < 100) && ((a % 2) == 0) );

    */


// Задача 14*) Дано трехзначное число. Проверить истинность высказывания: «Все цифры данного числа различны».

    /*

    alert ('Все цифры данного (трехзначного) числа различны');

    let a = prompt ('Напишите число a','');

    let num3 = a % 10;                              // 123 = 3
    let num2 = ((a - num3) / 10) % 10;              // 123 = 2
    let num1 = ((a - num3) - (num2 * 10)) / 100;    // 123 = 1

    alert ((num1 != num2) && (num2 != num3) && (num3 != num1));

    */


// Задача 15) Дано число. Если оно является положительным, то прибавить к нему 1;
// в противном случае вычесть из него 2. Вывести полученное число.

    /*

    let n = prompt ('Напишите число','');

    if (n > 0) {
        alert (++n);
    } else {
        alert (n - 2);
    }

    */


// Задача 16) Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе.

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


// Задача 17)Ввели два числа. Найти большее из них. 
// Меньшее, если оно четное умножить на большее, иначе большее умножить на 4 и вывести результат

    /*

    let a = +prompt ('Напишите число a','');
    let b = +prompt ('Напишите число b','');

    let moreNum, lessNum;

    if (a > b) {

        moreNum = a;
        lessNum = b;

        alert (`a > b`);

    } else if (a < b) {               

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
