## Algoritmo base para os demais algoritmos

- Para que funcione de forma aproriada, a lista ou array precisam estar ordenados. Caso contrario, pode ser o que alvo seja encontrado, como nao sera encontrado, a depender de qual metade o alvo estiver localizado, assim gerando falsos negativos.

Na pratica, dado um array/list de tamanhoa 10, tres variaveis serao criadas, sendo elas

- mid
- low
- high

Onde low recebe o valor do primeiro indice do array, e high recebe o ultimo indice do array, e mid recebe como valor, o resultado inteiro da divisao por 2, da soma de low e high. Exemplo:
mid = (high + low) / 2

Pode ser que esse array/lista tenha um tamanho impar, sendo assim, o resultado de mid podera ser um indice de tipo decimal. Para evitar que isso ocorra, sera necessario arredondar esse valor para baixo. Exemplo em javascript

```js
let mid = Math.floor((high + low) / 2);
```

A ideia deste algoritmo eh trabalhar com a tecnica de dividir e conquistar, ou seja, o array/lista a ser consultado/pesquisado, sera dividido em duas metades, onde o meio do array sera o valor de mid. Alguns cenarios:

- Se o target/key para consulta for igual ao mid, a consulta para
- Se o mid for superior ao target/key, a consulta continua na primeira metade do array/lista, caso contrario, continua na segunda metade

Seguindo o exemplo do video: <a href=" https://www.youtube.com/watch?v=E6IOrZUpvSE">Visualization of Binary Search</a>

Obs.:

Dado o seguindo array:
[1, 3, 7, 10, 14, 15, 16, 18, 20, 21, 22, 23, 25, 33, 35, 42, 45, 47, 50, 52]

- Se o valor do target for superior ao valor do indice do mid, entao o novo valor do low sera mid + 1 nesse caso. Por exemplo, o mid esta no indice 9, e este indice tem o valor 21, mas o target eh superior, entao conforme o segundo cenario, o low vai receber o valor do indice 10, que vale 22, logo low agora tem valor 22.

Seguindo...

## Pseudo codigo:

Ainda conforme o seguinte array:

array = [1, 3, 7, 10, 14, 15, 16, 18, 20, 21, 22, 23, 25, 33, 35, 42, 45, 47, 50, 52]

Obv.: A obtencao do mid envolve basicamente calcular os indices, conforme sera exemplificado nas linhas abaixos.

<code>
target = 33 // nesse caso target tem valor array[]

high = 19 // indice 19 = array.length - 1, de acordo com essa lista, o index 19 tem o valor 52

low = 0 // 1 array[0], de acordo com essa lista, o index 0 tem o valor 1
mid = high - low / 2 // arrendodado para baixo
mid = array[9] // que vale 21
</code>

Como o valor do target eh superior a 21, ou seja, ao mid, entao o mid sera recalculado. O calculo sera:

mid = low + (low - high) / 2 // rebendo a soma do novo valor de low + o valor antigo de mid
entao mid agora tem o seguin valor: mid = array[14] // que vale 35, sendo superior ao target

Valores atuais
<code>
high = 19 // indice 19 = array.length - 1, de acordo com essa lista, o index 19 tem o valor 52

low = mid + 1 // array[10] = 22
mid = low + ((high - low) / 2) // arrendodado para baixo
mid = array[14] // que vale 35, sendo superior ao target
</code>

Como agora o mid eh inferior ao target, entao o high tera seu valor atualizado, sendo assim high = mid - 1

<code>
high = 13 // array[13], de acordo com essa lista, o index 13 tem o valor 33

low = mid + 1 // array[10] = 22
mid = low + ((high - low) / 2) // arrendodado para baixo
mid = array[11] // que vale 23, sendo superior ao target
</code>

Contudo, o target continua sendo superior ao mid, entao

<code>
high = 13 // array[13], de acordo com essa lista, o index 13 tem o valor 33

low = mid + 1 // array[12] = 25
mid = low + ((high - low) / 2) // arrendodado para baixo
mid = array[11] // que vale 23, sendo superior ao target
</code>

Novamente o target continua sendo superior ao mid entao chegamos ao resultado

<code>
high = 13 // array[13], de acordo com essa lista, o index 13 tem o valor 33
low = mid + 1 // array[13] = 33
mid = low + ((high - low) / 2) // arrendodado para baixo
mid = array[13] // que vale 23, sendo superior ao target
</code>

E entao chegamos ao resultado

mid = array[13] // que vale 33
mid == target √
