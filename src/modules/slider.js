
const slider = () => {
 
    const sliderBlock = document.querySelector('.portfolio-content'),
      slides = document.querySelectorAll('.portfolio-item'),
      sliderDots = document.querySelector('.portfolio-dots');

    const timeInterval = 2000;
    const arrDots = [];
      
    let currentSlide = 0;
    let interval;

    const checkDots = () => {
        
        slides.forEach((item) => {
            
            const li = document.createElement('li');
            li.classList.add('dot');
            arrDots.push(li);
            sliderDots.append(li);
          
        })

    };
    checkDots();


    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };


    const  autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(arrDots, currentSlide, 'dot-active');
        currentSlide ++;

        if (currentSlide >= slides.length) {
          currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(arrDots, currentSlide, 'dot-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
      e.preventDefault();

      if (!e.target.matches('.dot, .portfolio-btn')) {
        return;
      }
      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(arrDots, currentSlide, 'dot-active');

      if (e.target.matches('#arrow-right')) {
        currentSlide++;
      } else if (e.target.matches('#arrow-left')) {
        currentSlide--;
      }
      else if (e.target.classList.contains('dot')) {
          arrDots.forEach((dot, index) => {
              if (e.target === dot ) {
                  currentSlide = index;
              }

          });
      }

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(arrDots, currentSlide, 'dot-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
        
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
         if (e.target.matches('.dot, .portfolio-btn')) {
           startSlide(timeInterval);
        }
    }, true);
       
       
    startSlide(timeInterval);





};
export default slider;