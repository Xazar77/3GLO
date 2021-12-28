

const calc = () => {


    const calcType = document.querySelector('.calc-type'),
          inputCalcSquare = document.querySelector('.calc-square'),
          inputCalcCount = document.querySelector('.calc-count'),
          inputCalcDay = document.querySelector('.calc-day');

  



    const checkInput = (input) => {
        input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/,'');
        });
        
    };
    checkInput(inputCalcSquare);
    checkInput(inputCalcCount);
    checkInput(inputCalcDay);




    








};

export default calc;