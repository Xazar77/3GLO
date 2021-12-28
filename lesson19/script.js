'use ctrict';

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let str,
    days;



function date_time() {
    let current_datetime = new Date(),
        currentTime = current_datetime.toLocaleTimeString('en'),
        deadline = '1 january 2022',
        dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        dayNew = Math.floor(timeRemaining / (60 * 60 * 24)),

        day = current_datetime.getDay(),
        hours = current_datetime.getHours();
       
    if (hours < 18) {
        str = 'Добрый день!';
    } else {
        str = 'Добрый вечер!';
    }
    week.forEach((item, id) => {
        if(id === day) {
             days = item;
          
        }
    });
    

   
   return `
    <li>${str}</li> 
    <li>Сегодня: ${days}</li>
    <li>Текущее время: ${currentTime}</li>
    <li>До Нового года осталось ${dayNew} дней</li>
    `;
}





setInterval(function () {

    document.getElementById('root').innerHTML = date_time();
}, 1000);
