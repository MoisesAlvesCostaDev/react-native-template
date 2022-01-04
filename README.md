<br />
<p align="center">
  <h3 align="center">Template React Native com TypeScript (Android) </h3>
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
  - [Designer](#designer)
- [Como Usar](#Como-usar)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Edição](#edi%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#Contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto tem o objetivo de criar um templete em React Native com TypeScript. A principal motivação é diminuir o tempo inicial de desenvolvimento de um novos projetos.

### Designer

O Designer foi feito no figma e pode ser acessado em: [Telas](https://www.figma.com/file/Au23xfPmQHFgLec6WGjNo5/React-native-template?node-id=0%3A1)

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - Framework React Native;
- [React Navigation](https://reactnavigation.org/) - React Navigation para navegação entre telas
- [Axios](https://github.com/axios/axios) - Axios cliente para requisições http;
- [Babel](https://babeljs.io/) - Babel compilador JavaScript gratuito;
- [ESLint](https://eslint.org/) - ESLint para verificações de código;
- [Prettier](https://prettier.io/) - O Prettier para formatação formatação e padronização de código;
- [unform](https://unform.dev/recipes/typescript/) - Trabalho com formulários;
- [Yup](https://github.com/jquense/yup) - Validação de formulários;
- [styled-components](https://styled-components.com/) - estilização em arquivos dedicados;

<!-- GETTING STARTED -->

## Como-usar

Segue abaixo recomendações de como usar esse projeto

### Pré-requisitos

Recomendo que configure seu ambiente de desenvolvimento como demostrado neste artigo da Rocketseat: https://react-native.rocketseat.dev/

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
react-native-template
├── src/
│   ├── assets/
│   │   ├── colors
│   │   ├── images
│   │   └── styles
│   ├── components/
│   │   ├── Button
│   │   ├── forms
│   │   └── Modal
│   ├── config/
│   ├── hooks/
│   ├── misc/
│   ├── pages/
│   │   ├── ForgotPassword/
│   │   ├── Home
│   │   └── Login
│   ├── routes/
│   ├── services/
│   ├── index.js
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── app.json
├── babel.config.js
├── metro.config.js
├── README.md
└── tsconfig.json
```

### Instalação

1. Para instalar e utilizar esse template basta fazer uma copia do projeto na sua máquina e rodar na raiz do projeto

```sh
npm install
```

ou

```sh
yarn install
```

dependendo do seu gerenciador de pacotes

### Edição

```sh
npx react-native start
```

```sh
npx react-native run-android
```

- **src** - Diretório contendo todos os arquivos da aplicação.

- **components** - Diretório contendo todos os arquivos de components communs da aplicação.

- **config** - Diretório para guardar os arquivos de configuração.

- **assets** - Diretório para guardar os arquivos de imagem, cores e estilos comuns para toda aplicação

- **hooks** - Diretório para guardar os arquivos de imagem, cores e estilos comuns para toda aplicação

- **pages** - Diretório onde ficam as telas da aplicação

- **routes** - Diretório onde serão criados os arquivos de configuração de rotas

- **services** - Diretório onde serão criados os arquivos relacionados a serviços.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Moisés - [Github](https://github.com/moialc12102) - **moi.ac@hotmail.com**
