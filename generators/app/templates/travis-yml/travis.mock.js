export const continuousIntegrationLintingMock =
`language: node_js
node_js:
  - stable
script:
  - npm run lint
`;

export const continuousIntegrationTestingMock =
`language: node_js
node_js:
  - stable
script:
  - npm test
`;

export const continuousIntegrationContinuousDeploymentMock =
`language: node_js
node_js:
  - stable
deploy:
  provider: heroku
  app: project-name
  api_key: 0123456789
`;
