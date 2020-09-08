// The transform: option tells Jest that all ts, tsx, js or jsx files need to be transformed using a jest-preprocess.js file.
const babelOptions = {
  presets: [
    "@babel/preset-react",
    "babel-preset-gatsby",
    "@babel/preset-typescript",
  ]
}

module.exports = require("babel-jest").createTransformer(babelOptions)
