export default
`{
  "extends": "eslint:recommended",
  "rules": {
    "indent": [2, 2],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "no-console": 0
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "mocha": true
  },
  "plugins": [
  ]
}
`;
