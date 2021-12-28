
const auth = () => {

    const userName = document.querySelectorAll('[name=user_name]'),
        userEmail = document.querySelectorAll('[name=user_email]'),
        userPhone = document.querySelectorAll('[name=user_phone]'),
        userMessage = document.querySelector('[name=user_message]');
        // console.log(userForm);
          

    userEmail.forEach(item => {
        item.addEventListener('input', (e) => {
            
             e.target.value = e.target.value.match(/^[a-z0-9!*.\-_~'@]+/i);
        
        });
    });

    userMessage.addEventListener('input', (e) => {
       
        e.target.value = e.target.value.match(/^[а-яёА-ЯЁ -]+/gi);
        
       
    });
     userName.forEach(name => {
        name.addEventListener('input', (e) => {

            e.target.value = e.target.value.match(/^[а-яё -]+/gi);
        });
     });

    userPhone.forEach(phone => {
        phone.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/^[0-9()-]+/gi);
        });

    });

    // userName.forEach(nameText => () => {
    //     console.log(nameText)
    //     name.addEventListener('blur', (e) => {
            
    //         // let testName = /[^а-яё -]+/gi;
    //         // if(testName.test(name.value) === false) {
    //         //     e.target.value = e.target.value.replace(/^ +/gm, '') .replace(/^-+/gm, '').slice(0, 1).toUpperCase(0)+ e.target.value.slice(1).toLowerCase(0).replace(/[^а-я]+/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-');
    //         // } else {
    //         //     e.target.value = e.target.value.replace(/[^а-я]+/gi, '').slice(0, 1).toUpperCase(0) + e.target.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-я-\s]+/gi, '');
    //         // }
    // //         console.log(e.target);
    //     });

    // });


    //      inputTextItem.addEventListener('blur', (e) => {
    //         let testText = /[^а-я-\s]+/gi;
    //         if(testText.test(inputTextItem.value) === false){
    //             inputTextItem.value = inputTextItem.value.replace(/^ +/gm, '') .replace(/^-+/gm, '') /.slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[^а-яА-я]+/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-');

    //         }  else {
    //             inputTextItem.value = inputTextItem.value.replace(/[^а-яА-я]+/gi, '').slice(0, 1).toUpperCase(0) + inputTextItem.value.slice(1).toLowerCase(0).replace(/[a-zA-Z]/gi, '').replace(/\s+/g, ' ').replace(/-+/g, '-').replace(/[^а-яА-я-\s]+/gi, '');
    //         } 
    //     });
    // });
    // emailForm.forEach(emailItem => {
    //     emailItem.addEventListener('blur', () => {
    //         let testEmail = /^[^-a-zA-Z0-9!*.-~'@]+/gim;
    //         if(testEmail.test(emailItem.value) === false){
    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');
    //         }  else {
    //             emailItem.value = emailItem.value.replace(/[^-a-zA-Z0-9!*.-~'@]/g, '');
    //             emailItem.value = emailItem.value.replace(/^[^-a-zA-Z0-9!*.-~'@]/g, '');
    //         } 
    //     });
    // });

    // telForm.forEach(telItem => {
    //     telItem.addEventListener('blur', () => {
    //         let testTel = /^[^0-9()-]+/gi;
    //         if(testTel.test(telItem.value) === false){
    //             telItem.value = telItem.value/ .replace(/[^0-9()-]+/gi, ''); */
    //         } else {
    //             telItem.value = telItem.value.replace(/[^0-9()-]/gi, '');
    //         }
    //     });


};

export default auth;