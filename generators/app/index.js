'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(chalk.cyan('                                          '));
    this.log(chalk.cyan('------------------------------------------'));
    this.log(chalk.cyan('                   NEXUS                  '));
    this.log(chalk.cyan('  Scaffold modern JS projects in seconds  '));
    this.log(chalk.cyan('------------------------------------------'));
    this.log(chalk.cyan('                                          '));

    var prompts = [
      {
        type: 'list',
        message: 'Project type',
        name: 'projectType',
        choices: [
          {
            name: 'JS module (stand-alone npm package)',
            value: 'js-module'
          },
          {
            name: 'React component (stand-alone npm package)',
            value: 'react-component'
          },
          {
            name: 'React web app',
            value: 'react-web-app'
          }
        ]
      },
      {
        type: 'input',
        message: 'Project name',
        name: 'projectName',
        default: 'project-name'
      },
      {
        type: 'input',
        message: 'Project description',
        name: 'projectDescription',
        default: 'About the project'
      },
      {
        type: 'input',
        message: 'Author info',
        name: 'authorInfo',
        default: 'First Last <email@wherever.com> (www.website.com)'
      },
      {
        type: 'input',
        message: 'GitHub username',
        name: 'githubUsername',
        default: 'githubusername'
      },
      {
        type: 'checkbox',
        message: 'Optional: Add General Extensions',
        name: 'generalExtensions',
        choices: [
          {
            name: 'Add editor config (EditorConfig)',
            value: 'editorConfig'
          },
          {
            name: 'Add linting (ESLint)',
            value: 'linting'
          },
          {
            name: 'Add testing (Mocha)',
            value: 'testing'
          },
          {
            name: 'Add Continuous Integration (Travis CI)',
            value: 'continuousIntegration'
          },
          {
            name: 'Add Continuous Deployment (Travis CI + Heroku)',
            value: 'continuousDeployment'
          }
        ]
      },
      {
        when: function(props) {
          props.generalExtensions = props.generalExtensions || [];
          return props.generalExtensions.indexOf('continuousDeployment') > -1;
        },
        type: 'input',
        message: 'Heroku API Key',
        name: 'herokuApiKey',
        default: '0123456789'
      }
      // {
      //   when: function(props) {
      //     console.log(props.projectType);
      //     return (/^react-web-app/).test(props.projectType);
      //   },
      //   type: 'checkbox',
      //   message: 'Optional: Add React Extensions',
      //   name: 'reactExtensions',
      //   choices: [
      //     {
      //       name: 'COMING SOON, Add Flux architecture setup (Redux + Redux Dev Tools)',
      //       value: 'redux',
      //       disabled: true
      //     },
      //     {
      //       name: 'COMING SOON, Add server with isomorphic rendering (Node + Express)',
      //       value: 'server',
      //       disabled: true
      //     },
      //     {
      //       name: 'COMING SOON, Add isomorphic routing (Flatiron director)',
      //       value: 'testing',
      //       disabled: true
      //     },
      //     {
      //       name: 'COMING SOON, Add style reset and theme (React inline styles)',
      //       value: 'styles',
      //       disabled: true
      //     }
      //   ]
      // }
    ];

    this.prompt(prompts, function (props) {

      props.generalExtensions = props.generalExtensions || [];

      this.context = {
        projectType: props.projectType,
        projectName: props.projectName,
        projectDescription: props.projectDescription,
        authorInfo: props.authorInfo,
        githubUsername: props.githubUsername,
        generalExtensions: props.generalExtensions,
        editorConfig: (props.generalExtensions.indexOf('editorConfig') > -1) ? true : false,
        linting: (props.generalExtensions.indexOf('linting') > -1) ? true : false,
        testing: (props.generalExtensions.indexOf('testing') > -1) ? true : false,
        continuousIntegration: (props.generalExtensions.indexOf('continuousIntegration') > -1) ? true : false,
        continuousDeployment: (props.generalExtensions.indexOf('continuousDeployment') > -1) ? true : false,
        herokuApiKey: props.herokuApiKey
      };

      done();
    }.bind(this));
  },

  writing: {

    files: function () {

      var projectType = this.context.projectType,
        editorConfig = this.context.editorConfig,
        linting = this.context.linting,
        testing = this.context.testing,
        continuousIntegration = this.context.continuousIntegration,
        continuousDeployment = this.context.continuousDeployment;

      // root/

      this.template('gitignore/gitignore.ejs', '.gitignore', this.context);
      this.template('package-json/_package.ejs', 'package.json', this.context);
      this.template('readme-md/_README.ejs', 'README.md', this.context);

      if(projectType === 'react-web-app') {
        this.template('webpack-config-js/_webpack.config.ejs', 'webpack.config.js', this.context);
        this.template('server-js/_server.ejs', 'server.js', this.context);
        this.template('babelrc/babelrc.ejs', '.babelrc', this.context);
        this.template('index-html/_index.ejs', 'index.html', this.context);
      }

      if(editorConfig) {
        this.template('editorconfig/editorconfig.ejs', '.editorconfig', this.context);
      }

      if(linting) {
        this.template('eslintrc/eslintrc.ejs', '.eslintrc', this.context);
        this.template('eslintignore/eslintignore.ejs', '.eslintignore', this.context);
      }

      if(continuousIntegration || continuousDeployment) {
        this.template('travis-yml/travis.ejs', '.travis.yml', this.context);
      }

      // src/

      mkdirp('dist');
      mkdirp('src');

      if(projectType === 'js-module' || projectType === 'react-web-app') {
        this.template('src/index-js/_index.ejs', 'src/index.js', this.context);
      }

      if(projectType === 'react-component') {
        this.template('src/Example-js/_Example.ejs', 'src/index.js', this.context);
      }

      if(projectType === 'react-web-app') {
        this.template('src/Example-js/_Example.ejs', 'src/components/Example/Example.js', this.context);
      }

      if(testing) {

        if(projectType === 'js-module') {
          this.template('src/index-test-js/_index.test.ejs', 'src/index.test.js', this.context);
        }

        if(projectType === 'react-component') {
          this.template('src/Example-test-js/_Example.test.ejs', 'src/index.test.js', this.context);
        }

        if(projectType === 'react-web-app') {
          this.template('src/Example-test-js/_Example.test.ejs', 'src/components/Example/Example.test.js', this.context);
        }
      }
    }
  },

  install: function () {
    this.npmInstall();
  }
});
