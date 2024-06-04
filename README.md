# Physics Scriptbook

## Visão Geral

O repositório Physics Scriptbook foi criado para fornecer uma coleção de scripts e utilitários para resolver vários problemas de física. Este repositório tem como objetivo ajudar estudantes, educadores e entusiastas com ferramentas práticas para enfrentar exercícios e conceitos de física usando código.

## Funcionalidades

- **Constantes**: Constantes físicas predefinidas para uso em cálculos.
- **Funções**: Funções comuns relacionadas à física para resolver equações e problemas.
- **Problemas**: Problemas e soluções de exemplo para ajudar os usuários a entender e aplicar conceitos de física.
- **Utils**: Scripts utilitários para auxiliar em cálculos e resolução de problemas de física.

## Começando

1. Clone o repositório:

```bash
git clone https://github.com/igorfelipeduca/physics-scriptbook.git
```

2. Navegue até o diretório do projeto:

```bash
cd physics-scriptbook
```

3. Instale as dependências:

```bash
npm install
```

4. Explore e execute os scripts no arquivo playground.js.

## Modo de Uso

Para executar um problema da lista de problemas, utilize o script run problem:

1. Execute o seguinte comando:

```bash
npm run problem {problem_name}
```

Substitua <problem_name> pelo nome do arquivo do problema que você deseja resolver (por exemplo, problem1).

## Criando e Resolvendo um Novo Problema

Para criar e resolver um novo problema, siga as instruções abaixo:

1. Crie um novo arquivo no diretório problems com um nome descritivo (por exemplo, problem2.js).
2. Crie uma nova função no diretório functions para ser utilizada na resolução do problema.

### Exemplo de Problema

**Enunciado:** Calcule a velocidade final de um objeto em queda livre a partir do repouso após 5 segundos. (Despreze a resistência do ar)

### Passo 1: Criar a Função

Crie um arquivo chamado calculateFinalVelocity.js no diretório functions com o seguinte conteúdo:

```javascript
// calculateFinalVelocity.js

/**
 * Calculate the final velocity of an object in free fall from rest after a given time.
 *
 * @param {number} gravity - Acceleration due to gravity in m/s^2
 * @param {number} time - Time in seconds
 * @returns {number} - Final velocity in m/s
 *
 * Example:
 * const finalVelocity = calculateFinalVelocity(9.81, 5);
 * console.log(`The final velocity is ${finalVelocity} m/s after 5 seconds.`);
 */
export function calculateFinalVelocity(gravity, time) {
  return gravity * time;
}
```

### Passo 2: Utilizar a Função no Problema

Crie um arquivo chamado problem2.js no diretório problems com o seguinte conteúdo:

```javascript
// problem2.js

const calculateFinalVelocity = require("../functions/calculateFinalVelocity");

const gravity = 9.81; // Acceleration due to gravity in m/s^2
const time = 5; // Time in seconds

const finalVelocity = calculateFinalVelocity(gravity, time);
console.log(
  `The final velocity of the object is ${finalVelocity} m/s after ${time} seconds.`
);
```

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork do repositório e crie um pull request com suas alterações.

## Licença

Este projeto é de código aberto e está disponível sob a Licença MIT.
