export default
`language: node_js
node_js:
  - stable
script:
  - npm run lint
  - npm test
deploy:
  provider: heroku
  app: project-name
  api_key: 0123456789
`;
