document.title = 'Уроки с преподавателем';
const url = window.location.href;

const p = { //price
    '1': {
        '45': ['3200', '6560', '9480', '12320'],
        '60': ['3760', '7360', '10680', '13920'],
        '90': ['5560', '11040', '16020', '20880']
    },
    '3': {
        '45': ['8640', '16560', '24120', '31200'],
        '60': ['9588', '18960', '27720', '36000'],
        '90': ['15012', '28440', '41580', '54000']
    },
    '6': {
        '45': ['16320', '29376', '41004', '56304'],
        '60': ['19176', '33456', '47124', '64464'],
        '90': ['28356', '49368', '68544', '94656']
    }
};

const re = url.match(/\dm-\d+-\d/g);
const v = String(re).split('-');

let [d, m, w] = v; //d - продолжительность в месяцах, m - продолжительность урока в минутах, w - уроков в неделю

//В зависимости от этих параметров нужно получить цену и строку

let num = d.match(/\d/); //Числовое значение

let end = month(num);

const $builder = document.querySelector('.form-content .builder');
$builder.insertAdjacentHTML('afterbegin', `<div class='prod'><p>Абонемент на ${num} месяц${end}</p><p>${num*4*w} уроков по ${m} минут</p></div>`);
const $btn = document.querySelector('.form-content .builder .f-btn').parentElement;
$btn.insertAdjacentHTML('beforebegin', `<div class='prod__price'>К оплате: ${p[num][m][w-1]} &#x20bd;</div>`);

function month(val) {
    if (val == 1) {return '';};
    if (val == 3) {return 'a';};
    if (val >= 6) {return 'ев';};
};

const ph = {name:'Имя', email:'Email', phone:'Телефон'};
const $n = document.getElementsByName('formParams[full_name]')[0];
const $e = document.getElementsByName('formParams[email]')[0];
const $p = document.getElementsByName('formParams[phone]')[0];
$n.placeholder = `${ph.name}`;
$e.placeholder = `${ph.email}`;
$p.placeholder = `${ph.phone}`;
$payButton = document.querySelector('.f-btn');
$payButton.innerText = 'Оплатить';

let $body = document.getElementsByTagName('body')[0];
let $logo = document.createElement('div');
$logo.classList.add('logo');
$body.append($logo);
