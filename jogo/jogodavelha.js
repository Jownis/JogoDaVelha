let tabuleiro = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];
let jogadorAtual = 'X';
let jogoAtivo = true;

function exibirTabuleiro() {
    const tabuleiroDiv = document.getElementById('tabuleiro');
    tabuleiroDiv.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement('div');
            celula.textContent = tabuleiro[i][j] !== '-' ? tabuleiro[i][j] : '';
            celula.dataset.linha = i;
            celula.dataset.coluna = j;
            celula.addEventListener('click', fazerJogada);
            tabuleiroDiv.appendChild(celula);
        }
    }
}


function fazerJogada(event) {
    if (!jogoAtivo) return; 

    const linha = event.target.dataset.linha;
    const coluna = event.target.dataset.coluna;

    if (tabuleiro[linha][coluna] === '-') {
        tabuleiro[linha][coluna] = jogadorAtual;
        exibirTabuleiro();

      
        if (verificarVencedor()) {
            document.getElementById('mensagem').textContent = `Jogador ${jogadorAtual} venceu!`;
            jogoAtivo = false;
        } else if (verificarEmpate()) {
            document.getElementById('mensagem').textContent = 'Empate!';
            jogoAtivo = false;
        } else {
            
            jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X';
        }
    }
}


function verificarVencedor() {
   
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== '-') {
            return true;
        }
    }

   
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i] && tabuleiro[0][i] !== '-') {
            return true;
        }
    }

    
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== '-') {
        return true;
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== '-') {
        return true;
    }

    return false;
}


function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '-') {
                return false;
            }
        }
    }
    return true;
}


function reiniciarJogo() {
    tabuleiro = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ];
    jogadorAtual = 'X';
    jogoAtivo = true;
    document.getElementById('mensagem').textContent = '';
    exibirTabuleiro();
}


document.getElementById('reiniciarBtn').addEventListener('click', reiniciarJogo);


exibirTabuleiro();