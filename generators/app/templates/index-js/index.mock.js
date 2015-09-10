export const jsModuleMock =
`export default function() {
  return 'hello world';
}
`;

export const reactWebAppMock =
`import React from 'react';
import Example from './components/Example/Example';

React.render(<Example someProp='hello world' />, document.getElementById('app'));
`;
