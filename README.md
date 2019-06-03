# apollo-directives

![npm package](https://img.shields.io/badge/npm%20package-1.0.2-brightgreen.svg)

Custom graphQL directives for [Apollo](https://www.apollographql.com/)

## 🎉 Installation

```bash
npm i apollo-directives
# or
yarn add apollo-directives
```

## 📙 Directives
```bash
  renameField, camelCase, capitalize, lowerFirst, toLower, toUpper, trim, upperFirst
```

## ✍ Example Usage
Add `schemaDirectives` to your server
```js
const { ApolloServer } = require('apollo-server-express')
const { renameField, upperFirst, toLower } = require('apollo-directives')

const server = new ApolloServer({
  schemaDirectives: {
    renameField,
    upperFirst,
    toUpper,
    trim
  }
  ...
  context,
  typeDefs,
  resolvers,
  dataSources,
});
```
Include and use `directives` in your typeDefs
```js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  directive @renameField(name: String!) on FIELD_DEFINITION
  directive @upperFirst on FIELD_DEFINITION
  directive @toUpper on FIELD_DEFINITION
  directive @trim on FIELD_DEFINITION

  type Person {
    myCustomField: String! @renameField(name: "original_api_field_name")
    firstName: String! @upperFirst
    lastName: String! @upperFirst
    title: String! @toUpper
    address: String! @trim
  }
`;
```
## 👷 Work in progess

> Warning: This library is still a WIP. This is a beta version.

## ❓ Questions/Comments
Feel free to reach out ~ [ferdelamad](https://twitter.com/fullhackdev)
