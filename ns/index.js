const url = window.location.href;

let csv = url.match(/chatsovsemi-\d/);
let ssp = url.match(/samsebeprebod-\d/);

function month(num) {
    if (num == 1) {
        console.log('месяц')
    	return '';
    }
    if (num == 3) {
    	return 'a';
    };
    if (num >= 6) {
    	return 'ев';
    };
};

if (csv || ssp) {
    const $prod = document.querySelector('.prod');
    if (csv) {
    	let num = csv[0].match(/\d/);
		let end = month(num);
        $prod.innerHTML = `
            <p class="prod__title">Native Show</p>
            <p class="prod__type">#чатсовсеми</p>
			<p class="prod__dur">${num} месяц${end}</p>
		`;
    };
    if (ssp) {
    	let num = ssp[0].match(/\d/);
        let end = month(num);
        $prod.innerHTML = `
            <p class="prod__title">Native Show</p>
            <p class="prod__type">#самсебепрепод</p>
			<p class="prod__dur">${num} месяц${end}</p>
		`;
    };
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
$payButton.innerText = 'К оплате';