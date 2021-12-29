

const calc = (price = 100) => {


    const calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcCount = document.querySelector('.calc-count'),
          calcDay = document.querySelector('.calc-day'),
          calcBlock = document.querySelector('.calc-block'),
          total = document.getElementById('total');

    let interval;

    const checkInput = (input) => {
        input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/,'');
        });
    };
    checkInput(calcSquare);
    checkInput(calcCount);
    checkInput(calcDay);


    // const outNum = (num) => {
    //     const total = document.getElementById('total');
    //     const time = 3000; // время отводимое на перебор цифр
    //     const step = 1; // шаг перебора
    //     let n = 0; // число отсчитывается от нуля
    //     let t = Math.round(time / (num / step));
    //     interval = setInterval(() => {
    //         n += step;
    //         if (n == num) {
    //             clearInterval(interval);
    //         }
    //         total.textContent = n;
    //     }, t);
    // };
    
    let totalValue = 0;
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        
        let calcCountValue = 1;
        let calcDayValue = 1;
        
        
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        } 

        if (calcTypeValue && calcSquareValue) {
            totalValue = +(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
        } else {
            totalValue = 0;
        }
        return totalValue;
        // outNum(totalValue);
    //    total.textContent = +totalValue;
    };
   


    calcBlock.addEventListener('change', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
            
                 const time = 3000; // время отводимое на перебор цифр
                 const step = 20; // шаг перебора
                 let n = 0; // число отсчитывается от нуля
                 let t = Math.round(time / +totalValue / step);

                 if (totalValue != 0) {
                    interval = setInterval(() => {
                        n += step;
                        if (n === totalValue) {
                            clearInterval(interval);
                        }
                        total.textContent = n;
                    }, t);
                 }
                 
                // outNum(totalValue);
            
            console.log(totalValue);
        };
    });




    








};

export default calc;