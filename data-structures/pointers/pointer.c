
/*
 * Ponteiros e a coita apontada sao duas realidades diferentes
 * Um ponteiro que aponta para nada, nao tem sentido
 *
 *
 * Ponteiros servem para passagem de parametros por referencia
 *
 *
 * Podemos usar ponteiros para alocacao do tamanho de um vetor ou matriz em
 * tempo de execucao
 *
 *
 * */
#include <stdio.h>
#include <stdlib.h>

void semPonteiro(int p, int d) {
  int temp;
  temp = p;
  p = d;
  d = temp;
  printf("@@@   %d %d\n", p, d);
}

void comPonteiro(int *p, int *d) {
  int temp;
  temp = *p;
  *p = *d;
  *d = temp;
}

int main() {
  int a = 33, b = 77;
  printf("Antes a = %d, b = %d", a, b);

  // a ideia eh que o a fique com o valor de b e vice-versa
  // porem isso nao vai acontecer, pois dentro da funcao semPonteiro
  // a troca esta sendo feito por valor, e nao por endereco. O problema disso,
  // eh que as variaveis 'a' e 'b' sao variaveis de escopo local Consigo apenas
  // alterar se as variaveis forem de escopo global ou passando ponteiros
  semPonteiro(a, b);

  printf("Depois (funcao sem ponteiro): a = %d, b = %d\n", a, b);

  comPonteiro(&a, &b);
  printf("Depois (com sem ponteiro): a = %d, b = %d\n", a, b);

  return 0;
}
