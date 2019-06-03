module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }]
  ],
  overrides: [{
    test: "./src",
    compact: true,
  }],
  plugins: [
    ['@babel/transform-runtime']
  ]
}
