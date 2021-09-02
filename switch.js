// Задача 1) Дано целое число в диапазоне 1–7. 
//	 Вывести строку — название дня недели, соответствующее данному числу  
//	 (1  —  «понедельник»,  2  —  «вторник» и т. д.).

    /*

    let  weekDayNumder = +prompt ('Введите номер дня недели');

    switch (weekDayNumder) {

        case 1:
            alert ('Понедельник');
            break;
            
        case 2:
            alert ('Вторник');
            break;

        case 3:
            alert ('Среда');
            break;

        case 4:
            alert ('Четверг');
            break;

        case 5:
            alert ('Пятница');
            break;

        case 6:
            alert ('Суббота');
            break;

        case 7:
            alert ('Воскресенье');
            break;

        default:
            alert ('Нет таких значений');

    }

    */


// Задача 2) Дан номер месяца  —  целое число в диапазоне  1–12  (1  —  январь,  2  —  февраль и т.д.).
//	Вывести название соответствующего времени года  («зима», «весна», «лето», «осень»). 


    /*

    let  monthNumber = +prompt ('Введите номер месяца');

    switch (monthNumber){

        case 12:
        case 1:
        case 2:
            alert ('Зима');
            break;

        case 3:
        case 4:
        case 5:
            alert ('Весна');
            break;

        case 6:
        case 7:
        case 8:
            alert ('Лето');
            break;
        
        case 9:
        case 10:
        case 11:
            alert ('Осень');
            break;
        
        default:
            alert ('Нет таких значений');
                                            
    }

    */


// Задача 4) Единицы длины пронумерованы следующим образом:  
//	1  —  дециметр,  2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
//	Дан номер единицы длины (целое число в диапазоне  1–5)  и длина отрезка в этих единицах (вещественное число). 
//	Найти длину отрезка в метрах. 

    /*

    let numberUnit = +prompt ('Введите номер единицы измерения числа: 1) дм; 2) км; 3) м; 4) мм; 5) см; ', '3');
    let segmentLength = +prompt ('Введите длинну отрезка. Переведем число вметры', '1');

    switch (numberUnit) {

        case 1:
            segmentLength = segmentLength * (10 ** -1);
            alert (`Это будет ${segmentLength} метр (-a, -ов)`);
        break;
        
        case 2:
            segmentLength = segmentLength * (10 ** 3);
            alert (`Это будет ${segmentLength} метр (-a, -ов)`);
        break;

        case 3:
            segmentLength = segmentLength * (10 ** 0);     
            alert (`Это будет ${segmentLength} метр (-a, -ов)`);
        break;

        case 4:
            segmentLength = segmentLength * (10 ** -3);
            alert (`Это будет ${segmentLength} метр (-a, -ов)`);
        break;

        case 5:
            segmentLength = segmentLength * (10 ** -2);
            alert (`Это будет ${segmentLength} метр (-a, -ов)`);
        break;

        default:
            alert ('Нет таких значений');
    }

    */