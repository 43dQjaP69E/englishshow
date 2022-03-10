export function formElements() {
    document.getElementsByName('formParams[full_name]')[0].placeholder = 'имя';
    document.getElementsByName('formParams[email]')[0].placeholder = 'email';
    document.getElementsByName('formParams[phone]')[0].placeholder = 'телефон';
    document.querySelector('.f-btn').innerText = 'оплатить';
};