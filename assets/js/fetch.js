const search = document.querySelector('.search');
const input = document.querySelector('#input-name');
const resultText = document.querySelector('.result');
const listHistory = document.querySelector('.list-history');
let firstName = '';
let oldContent = localStorage.getItem('oldContent');

if (oldContent) {
    oldContent = JSON.parse(oldContent);
} else {
    oldContent = [];
}

updateListContent();

function fetchFirstName(firstName) {
    fetch(`https://api.agify.io?name=${firstName}`)
    .then((response) => response.json())
    .then((data) => {
        let result = data.name + ' is ' + data.age + ' years old';
        resultText.textContent = result;
        oldContent.push(result);
        localStorage.setItem('oldContent', JSON.stringify(oldContent));
        updateListContent();
    })
}

function addListContent(result) {
    const liHTML = document.createElement('li');

    liHTML.textContent = result;
    listHistory.prepend(liHTML);
}

function updateListContent() {
    listHistory.innerHTML = '';
    const start = Math.max(oldContent.length - 10, 0);
    for (let i = start; i < oldContent.length; i++) {
        addListContent(oldContent[i]);
    }
}

function startSearch() {
    let firstName = input.value.trim();
    if (!firstName) {
    resultText.textContent = "Veuillez entrer un prénom.";
    return;
    }
fetchFirstName(firstName);
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    startSearch();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        startSearch();
    }
})