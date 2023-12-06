// Definindo a classe Calculadora
class Calculadora {
   somar(num1, num2) {
        return num1 + num2;
    }

    subtracao(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
}

// Definindo a classe Display
class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora(); // Criando uma instância da classe Calculadora
        this.tipoOperacion = undefined; // Tipo de operação atual (soma, subtração, etc.)
        this.valorActual = ''; // Valor atual exibido no display
        this.valorAnterior = ''; // Valor anterior exibido no display
        this.signos = {
           somar: '+',
            dividir: '/',
            multiplicar: 'x',
            subtracao: '-',
        }
    }

    // Método para remover o último dígito do valor atual
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    // Método para limpar todos os valores e operações
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    // Método para realizar a computação da operação selecionada
    computar(tipo) {
        // Se a operação não for igual, realiza o cálculo antes de definir a nova operação
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo; // Define o novo tipo de operação
        this.valorAnterior = this.valorActual || this.valorAnterior; // Atualiza o valor anterior
        this.valorActual = ''; // Limpa o valor atual para a próxima entrada
        this.imprimirValores();
    }

    // Método para adicionar um número ao valor atual
    agregarNumero(numero) {
        // Evita adicionar mais de um ponto decimal no valor
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    // Método para exibir os valores nos displays HTML
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    // Método para realizar o cálculo com base no tipo de operação selecionado
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        // Verifica se os valores são números válidos
        if (isNaN(valorActual) || isNaN(valorAnterior)) return

        // Realiza o cálculo usando a instância da classe Calculadora
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}

