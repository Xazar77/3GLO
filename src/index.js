
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import formSend from './modules/formSend';
import tabs from './modules/tabs';
import slider from './modules/slider';


timer('17 january 2022');
menu();
modal();
calc(100);
tabs();
slider('.portfolio-item', '.portfolio-dots');
formSend({
    formId1: 'form1', 
    someElement1: [{
        type: 'block',
        id: 'total'
    }],
},
{
    formId2: 'form2',
    someElement2: [{
        type: 'input',
        id: 'total'
    }],
},
{
    formId3: 'form3',
    someElement3: [{
        type: 'block',
        id: 'total'
    }],
});
    
    
    
    
//     {
//     formId1: 'form1',
//     formId2: 'form2',
//     formId3: 'form3',
//     someElement1: [{
//         type: 'block',
//         id: 'total'
//     }],
//     someElement2: [{
//         type: 'input',
//         id: 'total'
//     }],
//     someElement3: [{
//         type: 'block',
//         id: 'total'
//     }]
  
// });