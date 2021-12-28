
const auth = () => {

    const userName = document.querySelectorAll('[name=user_name]'),
        userEmail = document.querySelectorAll('[name=user_email]'),
        userPhone = document.querySelectorAll('[name=user_phone]'),
        userMessage = document.querySelector('[name=user_message]');
       
        

    userEmail.forEach(email => {
        email.addEventListener('blur', (e) => {

            let testEmail = /^[^a-z0-9!*.\-_~'@]+/i;
            if (testEmail.test(e.target.value) === false){
                e.target.value = e.target.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');
            } else {
                e.target.value = e.target.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');
                e.target.value = e.target.value.replace(/^[^-a-zA-Z0-9!*.-~'@]/g, '');
            } 
            
        
        });
    });

    userMessage.addEventListener('input', (e) => {
       
        e.target.value = e.target.value.match(/^[а-яёА-ЯЁ -]+/gi);
        
       
    });
     userName.forEach(name => {
        name.addEventListener('blur', (e) => {
                
            let testText = /^[^-a-zA-Z0-9!*.-~'@]+/g;
            if(testText.test(e.target.value) === false) {
                let a = e.target.value.replace(/^ +/gm, '').replace(/^-+/gm, '').slice(0, 1).toUpperCase(0);
                let b = e.target.value.slice(1).toLowerCase(0).replace(/[^а-яё]+/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-');
                e.target.value = a + b;
            } else {
                let c = e.target.value.replace(/[^а-яё]+/gi, '').slice(0, 1).toUpperCase(0);
                let d = e.target.value.slice(1).toLowerCase(0).replace(/[a-z]/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-яё-\s]+/gi, '');
                e.target.value = c + d;
            }
        });
     });

    userPhone.forEach(phone => {
        phone.addEventListener('blur', (e) => {
            let testPhone = /^[^0-9()-]+/gi;
            if (testPhone.test(e.target.value) === false) {
                e.target.value = e.target.value.replace(/[^0-9()-]+/g, '');
            } else {
                e.target.value = e.target.value.replace(/[^0-9()-]/g, '');
            }
            
        });

    });

  
    

};

export default auth;