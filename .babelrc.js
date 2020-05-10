const isTest = process.env.NODE_ENV === 'test'

module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        "useBuiltIns": "entry",
        "corejs": 3,
        "modules": isTest ? 'commonjs' : false,
        "targets": {
          "esmodules": true
        }
      }
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "babel-plugin-styled-components",
    [
      "@babel/plugin-proposal-decorators", {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties", {
        "loose": true
      }
    ],
    "@babel/plugin-syntax-dynamic-import"
  ]
}