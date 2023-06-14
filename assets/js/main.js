const body = document.body;

// Creazione Section

const section = document.createElement('section');
body.appendChild(section);

// Funzione di creazione elementi HTML

function create(name, tag, parent, id, text, classSelector) {
    name = document.createElement(tag);
    parent.appendChild(name);
    name.setAttribute('id', `${id}`);
    name.textContent = `${text}`;
    if (classSelector) {
        name.setAttribute('class', `${classSelector}`)
    }
    return name;
}

// Container Principale
const container = create ('container', 'div', 'section', 'container', '');

// Titolo
const title = create ('header', 'h1', container, '', 'JS Counter', '');

// Contenitore Valore Counter
const valueContainer = create ('value-container', 'div', container, 'value-container', '');

// Valore Counter
const counter = create ('value', 'p', counterContainer, 'value', '0', '');

// Container Pulsanti
const btnContainer = create ('btnContainer', 'div', container, btn-container, '');

// Pulsante +
const btnDecrement = create ('btnDecrement', 'div', btnContainer, 'decrement','', 'btn');
const valueBtnDecrement = create ('valueBtnDecrement', 'p', btnDecrement, 'value-btn-decrement', '-');

// Pulsante Reset
const btnReset = create ('btnReset', 'div', btnContainer, 'reset', '', 'btn');
const valueBtn = create ('valueBtn', 'p', btnReset, 'btn-reset', 'Reset');

// Pulsante -
const btnIncrement = create ('btnIncrement', 'div', btnContainer, 'decrement', '', 'btn');
const valueBtnIncrement = create ('valueBtnIncrement', 'p', btnIncrement, 'value-btn-increment', '+');

