const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours'),
          timerMinutes = document.getElementById('timer-minutes'),
          timerSeconds = document.getElementById('timer-seconds');
    let idInterval;

    const getTimeRemaining = () => {
       
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
      
        let timeRemaining = (dateStop - dateNow) / 1000;
       
        
        let hours = Math.floor(timeRemaining / (60 * 60)); // 3. из минут получаем часы
        let minutes = Math.floor((timeRemaining / 60) % 60); // 2. из секунд получаем минуты
        let seconds = Math.floor(timeRemaining % 60); // 1. округляем полученное количество милисекунд до целочисленного
        
        return { timeRemaining, hours, minutes, seconds};
           
         
    };

    const getZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };
   
    
    const updateClock = () => {
        let getTime = getTimeRemaining();
    
       
        timerHours.textContent = getZero(getTime.hours);
        timerMinutes.textContent = getZero(getTime.minutes);
        timerSeconds.textContent = getZero(getTime.seconds);
        
      



    };
    updateClock();

    idInterval = setInterval(() => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
           updateClock();
        } else  if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);

        }
    }, 1000);


    
};
export default timer;