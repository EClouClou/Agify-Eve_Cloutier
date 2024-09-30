const btnHideHistory = document.querySelector('.hide-history');
const btnShowHistory = document.querySelector('.show-history');
const anHistory = document.querySelector('.list-history');
const noHistory = document.querySelector('.no-history');

btnHideHistory.addEventListener('click', () => {
    anHistory.classList.add('hidden');
    btnHideHistory.classList.add('hidden');
    btnShowHistory.classList.remove('hidden');
    noHistory.classList.remove('hidden');
});

btnShowHistory.addEventListener('click', () => {
    anHistory.classList.remove('hidden');
    btnHideHistory.classList.remove('hidden');
    btnShowHistory.classList.add('hidden');
    noHistory.classList.add('hidden');
});

