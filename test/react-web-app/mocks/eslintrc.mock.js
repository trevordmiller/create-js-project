export default
`{
  "extends": "eslint:recommended",
  "rules": {
    "indent": [2, 2],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "no-console": 0
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": 2,
    "react/jsx-max-props-per-line": 2,
    "react/jsx-indent-props": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-quotes": 2,
    "react/jsx-sort-prop-types": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 2,
    "react/no-set-state": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": 2
  },
  "ecmaFeatures": {
    "modules": true,
    "jsx": true,
    "experimentalObjectRestSpread": true
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "mocha": true
  },
  "plugins": [
    "react"
  ]
}
`;
