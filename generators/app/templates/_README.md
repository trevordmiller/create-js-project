# <%= projectName %>

<%if (continuousIntegration) { %>
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= projectName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= projectName %>)
<% } %>

<%= projectDescription %>

---

<%if (projectType === 'web-app-react') { %>
## Getting Started

1. Clone the project
1. `npm install`
1. `npm run dev`
<% } %>
<%if (projectType === 'npm-package-js') { %>
## Install

`$ npm install <%= projectName %> --save`

---

## Example

```
...
```

---

## API

...
<% } %>
---

## Contributing

Contributions are welcome!

1. Clone
1. `npm install`
1. `npm run dev`
1. Follow code style in project
<%if (testing) { %>
1. Ensure test coverage for any changed functionality
<% } %>
1. Submit a pull request

---

## License

MIT
