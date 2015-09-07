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
        name: 'projectType',
        message: 'Project type',
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
        name: 'projectName',
        message: 'Project name',
        default: 'project-name'
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Project description',
        default: 'About the project'
      },
      {
        type: 'input',
        name: 'authorInfo',
        message: 'Author info',
        default: 'First Last <email@wherever.com> (www.website.com)',
        store: true
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'GitHub username',
        default: 'githubusername',
        store: true
      },
      {
        type: 'checkbox',
        name: 'generalExtensions',
        message: 'General Extensions',
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
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {

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
        continuousIntegration: (props.generalExtensions.indexOf('continuousIntegration') > -1) ? true : false
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
        continuousIntegration = this.context.continuousIntegration;

      // ----------------------------
      // BASE
      // ----------------------------

      // SRC & DIST FOLDERS

      mkdirp('dist');
      mkdirp('src');

      if(projectType === 'js-module' || projectType === 'react-web-app') {
        this.template('src/index-js/_index.ejs', 'src/index.js', this.context);
      }

      if(projectType === 'react-component') {
        this.copy('src/Example-js/_Example.ejs', 'src/Example/Example.js');
      }

      if(projectType === 'react-web-app') {
        this.copy('src/Example-js/_Example.ejs', 'src/components/Example/Example.js');
      }

      if(testing) {

        if(projectType === 'js-module') {
          this.template('src/index-js-test/_index.test.ejs', 'src/index.test.js', this.context);
        }

        if(projectType === 'react-component') {
          this.copy('src/Example-test-js/_Example.test.ejs', 'src/Example.test.js');
        }

        if(projectType === 'react-web-app') {
          this.copy('src/Example-test-js/_Example.test.ejs', 'src/components/Example/Example.test.js');
        }
      }

      // ROOT FILES

      this.template('gitignore/gitignore.ejs', '.gitignore', this.context);
      this.template('package-json/_package.ejs', 'package.json', this.context);
      this.template('readme-md/_README.ejs', 'README.md', this.context);

      if(projectType === 'react-component' || projectType === 'react-web-app') {
        this.copy('webpack-config-js/_webpack.config.ejs', 'webpack.config.js');
      }

      if(projectType === 'react-web-app') {
        this.copy('server-js/_server.ejs', 'server.js');
        this.copy('babelrc/babelrc.ejs', '.babelrc');
        this.template('index-html/_index.ejs', 'index.html', this.context);
      }

      if(editorConfig) {
        this.copy('editorconfig/editorconfig.ejs', '.editorconfig');
      }

      if(linting) {
        this.template('eslintrc/eslintrc.ejs', '.eslintrc', this.context);
      }

      if(continuousIntegration) {
        this.template('travis-yml/travis.ejs', '.travis.yml', this.context);
      }
    }
  },

  install: function () {
    this.npmInstall();
  }
});
