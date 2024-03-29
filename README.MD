# GYM

Aplicativo para acompanhamento e controle de exercícios físicos. Permite o cadastro individual, login para acesso, grupos exercícios, exercícios, o registro da conclusão do exercício e um histórico para acompanhamento da progressão das atividades. Também é possível incluir e alterar os dados do perfil do usuário como: avatar, nome, senha.

![teste](./assets/screens.gif)

## Pré-requisitos

- API (backend) - É necessário rodar a API antes do Aplicativo [projeto no github](https://github.com/esbnet/ignitegym-api)
- Node
- Emulador android / IOS - executando ([android studio](https://developer.android.com/studio?gclid=Cj0KCQiAnfmsBhDfARIsAM7MKi0NMYXKL6hLtgWwtj7-uVqfD5_B6W3nqQoZfSbb11Pemxk4jTmLaAkaAuCGEALw_wcB&gclsrc=aw.ds&hl=pt-br))
- SDK 50>

## Techs

- typescript - adiciona tipagem estática ao javascript
- axios - realizar requisições REST (http client para node)
- react-navigation - gerência o roteamento e provê navegação entre as telas
- native-base - Framework de componentes UI
- react-hook-form - Submit de formulários, validação de inputs controlados
- yup - squema para análise, validação e transformação de valor em tempo de execução
- async-storage - armazena e recupera dados localmente (local storage)
- babel - transcompilador JavaScript 
- svg-transformer - manipular arquivos de imagem SVG

## Instalação e Execução

1. Instalar e executat a API - [seguir orientação na documentação do git](https://github.com/esbnet/ignitegym-api)
2. Clonar o projeto do APP
  `git clone https://github.com/esbnet/ignite-react-native-gym.git `
3. Instalar depedências
  `npm install`
4. Altrar a linha 17 do arquivo gym/app/src/services/api.ts
  mudar de: `baseURL: 'http://192.168.0.3:3333',`
  para: `baseURL: 'http://[IP do servidor onde está rodando a API]:3333',`
5. Rodar o aplicativo
  `npm run android`
  

### Scripts

|                    Script | Target                                             |
| ------------------------- | -------------------------------------------------- |
|                    `npm run android` | Run API in **development** environment      |
|                    `npm start` | Run API in **production** environment         |
