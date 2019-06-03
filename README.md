# apollo-directives

![npm package](https://img.shields.io/badge/npm%20package-1.0.1-brightgreen.svg)

Custom graphQL directives for [Apollo](https://www.apollographql.com/)

## 📦 Installation

```bash
npm i apollo-directives
# or
yarn add apollo-directives
```

## 📙 Directives
```bash
  RenameFieldDirective
```

## ✍ Example Usage
Add `schemaDirectives` to your server
```js
const { ApolloServer } = require('apollo-server-express')
const { RenameFieldDirective } = require('apollo-directives')

const server = new ApolloServer({
  schemaDirectives: {
    renameField: RenameFieldDirective
  }
  ...
  typeDefs,
  resolvers,
  dataSources,
  context,
});
```
Include and use `directives` in your typeDefs
```js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  directive @renameField(name: String!) on FIELD_DEFINITION

  type Person {
    myCustomField: String! @renameField(name: "original_api_field_name")
  }
}
```
## 👷 Work in progess

> Warning: This library is still under construction! A pre-release version is available, but it is recommended not to use this in production yet.

## ❓ Questions/Comments
Feel free to reach out ~ [ferdelamad](https://twitter.com/fullhackdev)
