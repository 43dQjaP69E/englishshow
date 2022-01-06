const p = { //price
    '1': {
        '45': ['3 200', '6 560', '9480', '12 320'],
        '60': ['3 760', '7 360', '10 680', '13 920'],
        '90': ['5 560', '11 040', '16 020', '20 880']
    },
    '3': {
        '45': ['8 640', '16 560', '24 120', '31 200'],
        '60': ['9 588', '18 960', '27 720', '36 000'],
        '90': ['15 012', '28 440', '41 580', '54 000']
    },
    '6': {
        '45': ['16 320', '29 376', '41 004', '56 304'],
        '60': ['19 176', '33 456', '47 124', '64 464'],
        '90': ['28 356', '49 368', '68 544', '94 656']
    }
};

const url = window.location.href;
const re = url.match(/\dm-\d+-\d/g);
const v = String(re).split('-');

let [d, m, w] = v; //d - продолжительность в месяцах, m - продолжительность урока в минутах, w - уроков в неделю

//В зависимости от этих параметров нужно получить цену и строку

let num = d.match(/\d/); //Числовое значение

let end = month(num);

const $builder = document.querySelector('.form-content .builder');
$builder.insertAdjacentHTML('afterbegin', `<div class='prod'><p>Абонемент на ${num} месяц${end}</p><p>${num*4*w} уроков по ${m} минут</p></div>`);
const $btn = document.querySelector('.form-content .builder .f-btn').parentElement;
$btn.insertAdjacentHTML('beforebegin', `<div class='prod__price'>К оплате: ${p[num][m][w-1]}&#x20bd;</div>`);

function month(val) {
    if (val == 1) {return '';};
    if (val == 3) {return 'a';};
    if (val >= 6) {return 'ев';};
};
