# <%= projectName %>

<%if (continuousIntegration) { %>
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= projectName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= projectName %>)
<% } %>

<%= projectDescription %>

---

<%if (projectType === 'app') { %>
## Getting Started

1. Clone the project
1. `npm install`
<% } %>
<%if (projectType === 'package') { %>
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

Contributions are welcome! Just follow these steps:

1. Clone
1. `npm install`
1. `npm run dev`
1. Follow code style in project
1. Submit a pull request

---

## License

MIT
