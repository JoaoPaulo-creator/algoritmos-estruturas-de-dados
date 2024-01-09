// A função twoCrystalBalls recebe um array chamado "breaks" como argumento,
// representando os andares de um prédio onde uma ou duas bolas de cristal podem ser lançadas para encontrar o primeiro andar em que a bola de cristal quebra.

function twoCrystalBalls(breaks: number[]): number {
  // Calcula a quantidade de saltos necessários para cobrir todos os andares.
  const jmpAmount = Math.floor(Math.sqrt(breaks.length))
  // Inicializa o índice 'i' com o valor de 'jmpAmount', pulando diretamente para o quadrado de 'jmpAmount'.
  let i = jmpAmount
  // Loop para encontrar o intervalo onde a primeira bola de cristal quebra.
  for(; i < breaks.length; i += jmpAmount) {
    if(breaks[i]) {
      break // Se a bola de cristal quebra, sai do loop.
    }
  }

  // Ajusta o índice 'i' para a posição anterior ao ponto de quebra.
  i -= jmpAmount

  // Loop para percorrer o intervalo do último ponto de quebra até o ponto atual.
  for(let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
    if(  breaks[i]) {
      return i // Retorna o índice onde a segunda bola de cristal quebrou.
    }
  }

  return -1 // Se não encontrar o ponto de quebra da segunda bola, retorna -1.
}


console.log(twoCrystalBalls([1, 3, 101, 299, 4, 6, 7, 9, 98, 106]))

