
const modal = () => {

    const button = document.querySelectorAll('.popup-btn'),
          modal = document.querySelector('.popup'),
          closeBtn = modal.querySelector('.popup-close');
    let width = document.documentElement;
  



    button.forEach(btn => {
       
        btn.addEventListener('click', () => {
           
            if (width.offsetWidth <= 768) {
                 clearTimeout();
                modal.style.display = 'block';
                modal.style.opacity = '1';
               
            } else {
                modal.style.opacity = '0';
                modal.style.display = 'block';
                setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.transition = '.9s all';
            }, 200);
            }

        });
        
    });
    closeBtn.addEventListener('click', () => {
       
        if (width.offsetWidth <= 768) {
            modal.style.display = 'none';
            clearTimeout();
        } else {
            modal.style.opacity = '0';
            modal.style.transition = '.9s all';
            setTimeout(() => {
            modal.style.display = 'none';
            }, 600);
        }
                
    });

   
};
export default modal;
