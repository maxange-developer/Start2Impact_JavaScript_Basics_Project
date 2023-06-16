const body = document.body;

// Creazione Section

const section = document.createElement('section');
body.appendChild(section);

// Funzione di creazione elementi HTML

function create(nome, tag, parent, id, text, classSelector) {
    nome = document.createElement(tag);
    parent.appendChild(nome);
    nome.setAttribute('id', `${id}`);
    nome.textContent = `${text}`;
    if (classSelector) {
        nome.setAttribute('class', `${classSelector}`)
    }
    return nome;
}

// Container Principale
const container = create('container', 'div', section, 'container', '');

// Titolo
const title = create('header', 'h1', container, '', 'JavaScript Counter', '');

// Contenitore Valore Counter
const valueContainer = create('value-container', 'div', container, 'value-container', '');

// Valore Counter
const counter = create('value', 'p', valueContainer, 'value', '0', '');

// Container Pulsanti
const btnContainer = create('btnContainer', 'div', container, 'btn-container', '');

// Pulsante -
const btnDecrement = create('btnDecrement', 'div', btnContainer, 'decrement','', 'btn');
const valueBtnDecrement = create ('valueBtnDecrement', 'p', btnDecrement, 'value-btn-decrement', '-');

// Pulsante Reset
const btnReset = create('btnReset', 'div', btnContainer, 'reset', '', 'btn');
const valueBtn = create('valueBtn', 'p', btnReset, 'btn-reset', 'Reset');

// Pulsante +
const btnIncrement = create('btnIncrement', 'div', btnContainer, 'increment', '', 'btn');
const valueBtnIncrement = create('valueBtnIncrement', 'p', btnIncrement, 'value-btn-increment', '+');

// Blob

const blob = create('blob', 'div', section, 'blob', '')



const buttons = document.querySelectorAll('.btn');
const buttonsContainer = document.querySelector('#btn-container');
const value = document.querySelector('#value')

let count = 0;

buttonsContainer.addEventListener('click', function (e){
    const styles = e.target.id;
    if (counter <= 0) {
        count = 0
    }
    else if (styles.includes('decrement') && count > 0 ){
        count--;
    }
    else if (styles.includes('increment')) {
        count++;
    }
    else if (styles.includes('reset')) {
        count = 0
    }
    value.textContent = count;
})