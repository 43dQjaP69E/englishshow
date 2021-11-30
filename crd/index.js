const cards$ = {
    '1': '2 490',
    '2': '4 200'
};
const url = window.location.href;
const num = url.match(/\d/);
const $prod = document.querySelector('.prod');
const $prodprice = document.querySelector('.prod__price');

if (num) {
    console.log(`${num}`, typeof num)
    if (+num === 1) {
        $prod.innerHTML = `
            <p class='prod__title'>Английский в карточках</p>
            <p class='prod__type'>Идиомы</p>
        `;
    };

    if(+num === 2) {
        $prod.innerHTML = `
            <p class='prod__title'>Английский в карточках</p>
            <p class='prod__type'>Идиомы&mdash;С другом дешевле</p>
        `;
    };

    $prodprice.innerHTML = `К оплате: ${cards$[+num]}`
};

const placeholder = {
    name: 'Имя',
    email: 'Email',
    phone: 'Телефон'
};

const $n = document.getElementsByName('formParams[full_name]')[0];
const $e = document.getElementsByName('formParams[email]')[0];
const $p = document.getElementsByName('formParams[phone]')[0];

$n.placeholder = `${placeholder.name}`;
$e.placeholder = `${placeholder.email}`;
$p.placeholder = `${placeholder.phone}`;

$payButton = document.querySelector('.f-btn');
$payButton.innerText = 'Оплатить';
