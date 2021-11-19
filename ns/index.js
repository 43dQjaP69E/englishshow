const csvPrices = {
    '1': '2 490',
    '3': '4 490',
    '6': '6 990',
    '12': '9 990'
};

const sspPrices = {
    '1': '1 490',
    '3': '2 490',
    '6': '4 490',
    '12': '4 490'
};

const url = window.location.href;

let csv = url.match(/chatsovsemi-\d+/);
let ssp = url.match(/samsebeprepod-\d+/);

function month(num) {
    if (num == 1) {
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
    const $prodprice = document.querySelector('.prod__price');

    if (csv) {
    	let num = csv[0].match(/\d+/);
		let end = month(num);
        $prod.innerHTML = `
            <p class="prod__title">Native Show</p>
            <p class="prod__type">#чатсовсеми</p>
		<p class="prod__dur">${num} месяц${end}</p>
		`;
	    
	let currPrice = csvPrices[num];

	    currPrice = currPrice.split(' ').join('');
	    let salePrice = +currPrice - (+currPrice * 40 / 100);
	    console.log(currPrice, salePrice);

        $prodprice.innerHTML = `К оплате: ${csvPrices[num]}`;
    };
    if (ssp) {
    	let num = ssp[0].match(/\d+/);
        let end = month(num);
        $prod.innerHTML = `
            <p class="prod__title">Native Show</p>
            <p class="prod__type">#самсебепрепод</p>
			<p class="prod__dur">${num} месяц${end}</p>
		`;
        $prodprice.innerHTML = `К оплате: ${sspPrices[num]}`;
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
$payButton.innerText = 'Оплатить';
