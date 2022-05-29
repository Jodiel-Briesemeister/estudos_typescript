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
-Adiciona pacote npm de declarações de tipos para os módulos padrões do Node: `npm install -D @types/node`
-Instala o pacote de utilitários que vai nos ajudar a executar o servidor de desenvolvimento, escrito em TypeScript, diretamente no terminal, sem necessidade de compilarmos o código em JavaScript, além de reiniciar o servidor a cada alteração que fizermos, sem a necessidade de encerrarmos o processo e o iniciarmos novamente.:`npm install -D ts-node-dev`

## Instalando o Express
- Instala o pacote express: `npm install express`
- Instala o pacote npm de declarações de tipos do Express: `npm install -D @types/express`
- Instala a lib http-status-codes que nos permite lidar com os status HTTP de uma forma mais simples: `npm install http-status-codes`


-lib que faz o tratamento de erros disparar diretamente o middleware de erro sem a necessidade de colocar try/catch ao longo do seu código. Essa lib é a express-async-errors: `npm install express-async-errors`
