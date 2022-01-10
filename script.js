var contador = document.getElementById(`contador`);
var centesimos = 0;
var segundos = 0;
var minutos = 0;
var centesimosString = '0';
var segundosString = '0';
var minutosString = '0';
var intervalo;

var pOpcoes = document.getElementById(`pOpcoes`);

function criarButton(id,value,onclick) {
    var button = document.createElement(`input`);
    button.setAttribute(`id`, `${id}`);
    button.setAttribute(`value`, `${value}`);
    button.setAttribute(`onclick`, `${onclick}`);
    button.setAttribute(`class`, `inputButton`);
    button.setAttribute(`type`, `button`);
    button.setAttribute(`onmouseleave`, `mouseLeave('${id}')`);
    button.setAttribute(`onmouseover`, `mouseOver('${id}')`);
    return button;
}

var iniciarButton = criarButton('iniciarButton','Iniciar','iniciar()');
var pausarButton = criarButton('pausarButton','Pausar','pausar()');
var continuarButton = criarButton('continuarButton','Continuar','continuar()');
var reiniciarButton = criarButton('reiniciarButton','Reiniciar','reiniciar()');

function iniciar() {
    intervalo = setInterval(contar, 10);
    pOpcoes.innerHTML = ``;
    pOpcoes.appendChild(pausarButton);
    pOpcoes.appendChild(reiniciarButton);
    return intervalo;
}

function pausar() {
    pOpcoes.innerHTML = ``;
    pOpcoes.appendChild(continuarButton);
    pOpcoes.appendChild(reiniciarButton);
    clearInterval(intervalo);
    window.navigator.vibrate(200) //200 ms
}
function continuar() {
    iniciar();
}
function reiniciar() {
    clearInterval(intervalo);
    centesimos = 0;
    segundos = 0;
    minutos = 0;
    pOpcoes.innerHTML = ``;
    pOpcoes.appendChild(iniciarButton);
    contador.innerHTML = `00:00.<small>00</small>`
}
function contar() {
    centesimos += 1;
    if (centesimos == 100) {
        centesimos = 0;
        segundos += 1;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos += 1;
    }
    centesimosString = formatar(centesimos);
    segundosString = formatar(segundos);
    minutosString = formatar(minutos);
    contador.innerHTML = `${minutosString.toString()}:${segundosString.toString()}.<small>${centesimosString}</small>`;
}
function formatar(unidade) {
    var unidadeString = unidade.toString();
    if (unidadeString.length < 2) {
        unidadeString = `0${unidade}`;
    }
    return unidadeString;
}

function mouseOver(buttonId) {
    var button = document.getElementById(`${buttonId}`);
    button.style.backgroundColor = `white`;
    button.style.color = `rgb(29, 27, 27)`;
}
function mouseLeave(buttonId) {
    var button = document.getElementById(`${buttonId}`);
    button.style.backgroundColor = `rgb(29, 27, 27)`;
    button.style.color = `white`;
}