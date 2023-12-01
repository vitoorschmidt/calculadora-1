// Pegar referências dos displays e botões
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// Criar um objeto "display" usando uma classe chamada "Display"
const display = new Display(displayValorAnterior, displayValorActual);

// Adicionar ação para cada botão numérico
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

// Adicionar ação para cada botão de operador
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
