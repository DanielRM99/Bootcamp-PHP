const items = [];
let siguienteNumero = 1;

const cajaResultado     = document.getElementById("resultado");
const inputInsertIndex  = document.getElementById("posAdd");
const inputRemoveIndex  = document.getElementById("posRemove");

const btnPush    = document.getElementById("push");
const btnUnshift = document.getElementById("unshift");
const btnInsert  = document.getElementById("insert");
const btnPop     = document.getElementById("pop");
const btnShift   = document.getElementById("shift");
const btnRemove  = document.getElementById("remove");

// 1) Pintar
function pintarArray() {
  cajaResultado.textContent = JSON.stringify(items);
}

// 2) Acciones
function accionPush() {
  items.push(siguienteNumero++);
  pintarArray();
}

function accionUnshift() {
  items.unshift(siguienteNumero++);
  pintarArray();
}

function accionInsert() {
  const valorLeido = parseInt(inputInsertIndex.value, 10);
  let indice = Number.isNaN(valorLeido) ? items.length : valorLeido;

  if (indice < 0) indice = 0;
  if (indice > items.length) indice = items.length;

  items.splice(indice, 0, siguienteNumero++);
  pintarArray();
}

function accionPop() {
  if (items.length) items.pop();
  pintarArray();
}

function accionShift() {
  if (items.length) items.shift();
  pintarArray();
}

function accionRemove() {
  const indice = parseInt(inputRemoveIndex.value, 10);
  if (!Number.isNaN(indice) && indice >= 0 && indice < items.length) {
    items.splice(indice, 1);
  }
  pintarArray();
}

// 3) Eventos
btnPush.addEventListener("click", accionPush);
btnUnshift.addEventListener("click", accionUnshift);
btnInsert.addEventListener("click", accionInsert);
btnPop.addEventListener("click", accionPop);
btnShift.addEventListener("click", accionShift);
btnRemove.addEventListener("click", accionRemove);

// Estado inicial
pintarArray();
