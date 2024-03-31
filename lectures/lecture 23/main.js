const alertElement = document.querySelector('.alert');

let arrClasses = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-info', 'null'];

function removeAlertClasses() {
    arrClasses.forEach((key) => {
        alertElement.classList.remove(key);
    });
}

function updateAlert(className, text) {
    removeAlertClasses();
    className ? alertElement.classList.add(className) : '';
    alertElement.textContent = text || '';
}

function onClick() {
    updateAlert('alert-primary', 'A simple primary alert—check it out!');
}
document.querySelector('.btn-primary').addEventListener('click', () => {
    updateAlert('alert-primary', 'A simple primary alert—check it out!');
});

let btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', () => {
    updateAlert('alert-secondary', 'A simple secondary alert—check it out!');
});

let btnSuccess = document.querySelector('.btn-success');
btnSuccess.addEventListener('mouseover', () => {
    updateAlert('alert-success', 'A simple success alert—check it out!');
});
btnSuccess.addEventListener('mouseout', () => {
    removeAlertClasses();
    alertElement.textContent = '';
});

let btnDanger = document.querySelector('.btn-danger');
btnDanger.addEventListener('focus', () => {
    updateAlert('alert-danger', 'A simple danger alert—check it out!');
});
btnDanger.addEventListener('focusout', () => {
    removeAlertClasses();
    alertElement.textContent = '';
});

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.btn-dark').classList.toggle('hidden');
    document.querySelector('.btn-light').classList.toggle('hidden');
}
document.querySelector('.btn-dark').addEventListener('click', toggleMode);
document.querySelector('.btn-light').addEventListener('click', toggleMode);

let btnInfo = document.querySelector('.btn-info');
btnInfo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        updateAlert('alert-info', 'A simple info alert—check it out!');
    }
});

document.querySelector('.btn-info').addEventListener('click', () => {
    updateAlert('alert-info', 'A simple info alert—check it out!');
});

let cardTitles = document.querySelectorAll('.card-title');
for (let i = 0; i < cardTitles.length; i++) {
    console.log(cardTitles[i].textContent);
}

let cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    let addToCartBtn = cards[i].querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        let cardTitle = cards[i].querySelector('.card-title').textContent;
        console.log(cardTitle);
    });
}







