# Comandos básicos

## instalando e configurando o typescript:
- Adiciona typescript ao projeto: `npm install -D typescript`
- Cria arquivo de configuração: `npx tsc --init`

Agora, vamos conhecer um pouco mais do que já vem configurado no arquivo tsconfig.json e o que precisamos configurar para criar nosso primeiro projeto em Typescript!

- module: especifica o sistema de módulo a ser utilizado no código JavaScript que será gerado pelo compilador como sendo o CommonJS;
- target: define a versão do JavaScript do código compilado como ES6;
- rootDir: define a localização raiz dos arquivos do projeto;
- outDir: define a pasta onde ficará nosso código compilado;
- esModuleInterop: habilitamos essa opção para ser possível compilar módulos ES6 para módulos CommonJS;
- strict: habilitamos essa opção para ativar a verificação estrita de tipo;
- include: essa chave vai depois do objeto CompilerOptions e com ela conseguimos incluir na compilação os arquivos ou diretórios mencionados;
- exclude: essa chave também vai depois do objeto CompilerOptions e com ela conseguimos excluir da compilação os arquivos mencionados.

- Para gerar nossos arquivos compilados em `outDir` (que no caso desse projeto configuramos o caminho `./dist`) utilizamos o 
seguinte comando:
`npx tsc nomeDoArquivo.ts`

Ao rodarmos esse comando, será verificado o conteúdo do arquivo nomeDoArquivo.ts e, caso nenhum problema seja encontrado, um novo arquivo será criado com o nome nomeDoArquivo.js e contendo o código compilado para JavaScript.

## Typescript com node
- Adiciona pacote npm de declarações de tipos para os módulos padrões do Node: `npm install -D @types/node`
- Instala o pacote de utilitários que vai nos ajudar a executar o servidor de desenvolvimento, escrito em TypeScript, diretamente no terminal, sem necessidade de compilarmos o código em JavaScript, além de reiniciar o servidor a cada alteração que fizermos, sem a necessidade de encerrarmos o processo e o iniciarmos novamente.:`npm install -D ts-node-dev`

## Instalando o Express
- Instala o pacote express: `npm install express`
- Instala o pacote npm de declarações de tipos do Express: `npm install -D @types/express`
- Instala a lib http-status-codes que nos permite lidar com os status HTTP de uma forma mais simples: `npm install http-status-codes`


-lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código. Essa lib é a express-async-errors: `npm install express-async-errors`

## Tipos

- boolean: recebe true ou false
Ex: `let yes: boolean = true;`

- number: recebe valores numéricos e, assim como no JavaScript, todos são valores de ponto flutuante.<br>
Ex: `let x: number = 5;`

- string: recebe uma sequência de caracteres armazenados como unidades de código UTF-16 Unicode.<br>
Ex: `let abc: string = 'abc';`

- void: existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.<br>
Ex: 
```
function sayHelloWorld(): void {
  console.log("Hello World!");
}
```

- null e undefined: são subtipos de todos os outros tipos.<br>
`let nullValue = null;`<br>
`let undefinedValue = undefined;`

- Arrays<br>
Ex: <br>
  array de strings: `let names: string[] = ["Mary Joe", "Alan Joe"];`<br>
  array de numbers: `let n: number[] = [1, 2, 3];`

- Array de objetos<br>
Ex:

```
const book = {
  title: string,
  author: string,
  price: number
}
```

array de books = `book[]`

- Type Unions:
Type Unions (união de tipos) é uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Para isso, é preciso declarar os tipos esperados separados por barras.

// A função abaixo pode receber tanto um número
// quanto uma string.
```
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}
```

## Interfaces

A Interface é utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos. São uma forma eficiente de definir um "contrato de código", ou seja, aquilo que você espera que seja implementado dentro do seu código.
Por exemplo, se quiséssemos criar uma interface que define as propriedades e métodos de uma pessoa funcionária, seria assim:

```
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

## Generics

//
//
//

## Enum ou enumeração

Uma enum é um nome simbólico para um conjunto de valores relacionados, o que significa que você pode utilizá-la para criar um conjunto de constantes para uso com variáveis e propriedades.
Elas são muito úteis quando temos um conjunto de valores que determinado tipo de variável pode assumir.

Por padrão, uma enum é baseada em números. Os valores começam de zero e para cada opção é assinalado um número incrementado por 1, assim como os índices de um array.

```
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200`
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
```

## Testes em Typescript

- Instala jest, ts-jest e tipos: `npm install --D jest ts-jest @types/jest`

Depois de instalado, deveremos criar um arquivo de configurações para o Jest: 

jest.config.js
  ```
  module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'js', 'json'],
  }
  ```

Roots -> Aqui, você deve dizer aonde ficará o código fonte da sua aplicação.
testRegex -> Aqui, será o regex que o jest irá utilizar para identificar se um arquivo é, ou não é, um arquivo que contém testes. Isso, porque não dizemos ao jest qual arquivo executar. Por padrão, ele sempre irá executar todos os testes que ele conseguir achar.

Esse é um Regex “padrão”, ele irá buscar por arquivos que contenham o formato:

Nome-do-teste.test.tsx<br>
Nome-do-teste.test.ts<br>
Nome-do-teste.spec.tsx<br>
nome-do-teste.spec.ts


package.json
```  
"scripts": {
  "test": "jest"
}
```

## Funções de simulação

- jest.fn -> Retorna uma nova, não utilizada função de simulação, a partir dela podemos implementar novas funcionalidades
e resultados.
Ex:
```
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();
```

- mockReturnValue -> faz a função retornar o valor escolhido.
- mockReturnValueOnce -> retorna o valor escolhido apenas uma vez.
Ex: 
```
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true, true, true
```

- jest.spyOn -> Cria uma função de simulação semelhante ao jest.fn porém esta usamos para mockar objetos com funções.
Ex:
`jest.spyOn(object, methodName)`

```
const video = {
  play() {
    return true;
  },
};

module.exports = video;
```
```
const video = require('./video');

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore(); // Importante lembrar de sempre limpar os mocks ao final.
});
```
- jest.mock -> Pode ser utilizada quando o código que queremos testar depende de um módulo e este deve ser mockado.
Ex:
```
jest.mock('../abc');

const banana = require('../abc'); // abc virá mockado.

abc(); // retornará 'undefined' porque a função estará mockada.
```
Ex 2:
```
jest.mock('../moduleName', () => {
  return jest.fn(() => 42);
});


// Executando a função especificada como segundo argumento ao 'jest.mock'.
const moduleName = require('../moduleName');
moduleName(); // retornará '42';
```
