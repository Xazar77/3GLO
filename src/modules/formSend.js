const formSend = ({formId1, someElement1 = []}, {formId2, someElement2 = []}, {formId3, someElement3 = []}) => {

    const form1 = document.getElementById(formId1),
        form2 = document.getElementById(formId2),
        form3 = document.getElementById(formId3),
        userNames = document.querySelectorAll('[name=user_name]'),
        userEmails = document.querySelectorAll('[name=user_email]'),
        userPhones = document.querySelectorAll('[name=user_phone]'),
        userMessage = document.querySelector('[name=user_message]');

    const statusBlock = document.createElement('div'),
        statusImg = document.createElement('img');
    const loadText = 'images/oval.svg',
        errorText = 'Ошибка...',
        successText = 'Спасибо! Наш менеджер свами свяжется!';
    statusBlock.style.color = 'yellow';
        
        statusImg.style.cssText = `
            color: yellow;
            display: block;
            margin: 0 auto;
            text-align:center;
    `;
        




    const validEmail = (list) => {

        list.forEach(email => {

            email.addEventListener('blur', (e) => {
                console.log(e.target.value);
                let testEmail = /[a-z0-9~*!'_\-\.]*@[\w-]+\.\w{2,4}/gi;
                if (testEmail.test(e.target.value)) {
                    email.value = e.target.value;
                } else {
                    email.value = e.target.value.replace(/[а-яё]+/gi, '').replace(/@+/g, '@').replace(/^[\-\s]+/g, '').replace(/[\-\s]+$/g, '');

                }


            });
        });
    };

    const validMessage = () => {

        userMessage.addEventListener('input', (e) => {

            e.target.value = e.target.value.match(/[а-яё0-9 \-\.,;:?!]+/gi);


        });
    };

    const validName = (list) => {
        list.forEach(name => {
            name.addEventListener('blur', (e) => {

                let testText = /^[а-яё\- ]+/gi;

                if (testText.test(e.target.value)) {

                    name.value = e.target.value.replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '')[0].toUpperCase() + e.target.value.slice(1).replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '');
                } else {
                    name.value = e.target.value.replace(/[^а-яё\- ]+/gi, '')[0].toUpperCase().replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '') + e.target.value.replace(/[^а-яё\- ]+/gi, '').slice(1).replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '');

                }


            });
        });
    };

    const validPhone = (list) => {
        list.forEach(phone => {
            phone.addEventListener('blur', (e) => {

                let testPhone = /(\+7|8)[(]?(\d{3})[)]?(\d{3})[-]?(\d{2})[-]?(\d{2})/g;
                console.log(testPhone.test(e.target.value));
                if (testPhone.test(e.target.value)) {
                    phone.value = e.target.value;
                } else {
                    phone.value = e.target.value.replace(/[а-яa-z]+/g, '').replace(/\-+/g, '-').replace(/[^\d\(\)\-\+]+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '');
                }

            });

        });

    };


    validEmail(userEmails);
    validMessage();
    validName(userNames);
    validPhone(userPhones);



    // Реализовать проверку введенных данных в поля ввода с помощью события blur(при потере полем ввода фокуса) и заменять их на корректные при необходимости по правилам:

    // Должны удаляться все символы, кроме допустимых
    // Несколько идущих подряд пробелов или дефисов должны заменяться на один.
    // Пробелы и дефисы в начале и конце значения должны удаляться.
    // Для поля type = text Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные— к нижнему.





    const validate = (list) => {
        let success = false;

        const testPhone = /^(\+7|7|8)?[\-]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$/;
        const testName = /^[а-яё ]+$/i;
        const testMessage = /^[а-яё0-9 \-\.,;:?!]+$/gi;


        let ttext;
        let ttext1;

        let eemail;

        let pphohe;
        let pphone1;

        let mmess;
        //  let mmess1;




        list.forEach(input => {

            if (input.closest('[name=user_name]')) {
                ttext = input.closest('[name=user_name]');
                ttext = ttext.value;
            }

            if (input.closest('[name=user_phone]')) {
                pphohe = input.closest('[name=user_phone]');
                pphohe = pphohe.value;
            }
            if (input.closest('[name=user_email]')) {
                eemail = input.closest('[name=user_email]');
                eemail = eemail.value;
            }
            if (input.closest('[name=user_message]')) {
                mmess = input.closest('[name=user_message]');
                mmess = mmess.value;
            }

        });
        //   console.log(eemail);
        //   console.log(mmess);
        //   console.log(ttext);
        ttext1 = testName.test(ttext);
        //   console.log(ttext1);
        //   console.log(pphohe);
        pphone1 = testPhone.test(pphohe);
        //   console.log(pphone1);
        // console.log(ttext1 && pphone1);



        //  mmess1 = testMessage.test(mmess);
        //  console.log(mmess1);

        // console.log(mmess === undefined);

        if (ttext == '' || eemail == '' || pphohe == '' || mmess == '') {
            success = false;
            console.log('OCHKO');
            alert('Заполните все поля!!!');
        }
        if (mmess === undefined && ttext1 && pphone1) {

            success = true;
            console.log('YES');

        } else if (mmess && testMessage.test(mmess) && ttext1 && pphone1) {

            success = true;
            console.log('YES MM1');
        }

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = (form, someElement) => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        
        statusImg.src = loadText;
        form.append(statusImg);
        form.append(statusBlock);



        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElement.forEach(elem => {
            const element = document.getElementById(elem.id);


            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }

        });


        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    statusImg.src = '';
                   
                    formElements.forEach(input => {
                        input.value = '';
                        
                    });
                    
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });

        } else {


            alert('Данные не валидны!!!!');
            statusBlock.textContent = errorText;
            statusImg.src = '';
        }
    };

    
    const formListener = (form, someElement) => {
        try {
            if (!form) {
                throw new Error('Верните форму на место!!!');
            }
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                statusBlock.textContent = '';
                submitForm(form, someElement);


            });
        } catch (error) {
            console.log(error.message);
        }
    };
    formListener(form1, someElement1);
    formListener(form2, someElement2);
    formListener(form3, someElement3);

};

export default formSend;