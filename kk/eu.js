const kk27 = {
    '5': '40',
    '10': '70',
    '15': '100.5',
    '30': '192',
    '60': '354'
};

const kk55 = {
    '5': '75',
    '10': '135',
    '15': '195',
    '30': '375',
    '60': '690'
};

const url = window.location.href;

let kk = url.match(/kk.\d+.\d+/);

let items = kk[0].split('/');

if (items.length > 0) {
    const $prod = document.querySelector('.prod');
    const $prodprice = document.querySelector('.prod__price');

    if(+items[1] === 27) {
        $prod.innerHTML = `<span>{ КодКодыч</span><span>27 минут</span><span>${items[2]} уроков }</span>`;
        $prodprice.innerText = `К оплате: ${kk27[items[2]]}€`;
    };

    if(+items[1] === 55) {
        $prod.innerHTML = `<span>{ КодКодыч</span><span>55 минут</span><span>${items[2]} уроков }</span>`;
        $prodprice.innerText = `К оплате: ${kk55[items[2]]}€`;
    };
};

document.getElementsByName('formParams[full_name]')[0].placeholder = 'Имя';
document.getElementsByName('formParams[email]')[0].placeholder = 'Email';
document.getElementsByName('formParams[phone]')[0].placeholder = 'Телефон';

$payButton = document.querySelector('.f-btn');
$payButton.innerText = 'оплатить';
