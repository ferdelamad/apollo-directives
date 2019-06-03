module.exports = {
  presets: [
    [ '@babel/env', { loose: true } ]
  ],
  overrides: [{
    test: "./src",
    compact: true,
  }],
}
