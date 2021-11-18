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
$payButton.innerText = 'К оплате';