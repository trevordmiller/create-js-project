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
            name: 'npm package (vanilla JS)',
            value: 'npm-package-js'
          },
          {
            name: 'web app (React)',
            value: 'web-app-react'
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
            value: 'editorconfig'
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
        editorconfig: (props.generalExtensions.indexOf('editorconfig') > -1) ? true : false,
        linting: (props.generalExtensions.indexOf('linting') > -1) ? true : false,
        testing: (props.generalExtensions.indexOf('testing') > -1) ? true : false,
        continuousIntegration: (props.generalExtensions.indexOf('continuousIntegration') > -1) ? true : false
      };

      done();
    }.bind(this));
  },

  writing: {

    files: function () {

      // CORE

      mkdirp('src');
      mkdirp('dist');
      this.template('gitignore', '.gitignore', this.context);
      this.template('_package.json', 'package.json', this.context);
      this.template('_README.md', 'README.md', this.context);

      if(this.context.editorconfig) {
        this.copy('editorconfig', '.editorconfig');
      }

      if(this.context.linting) {
        this.template('eslintrc', '.eslintrc', this.context);
      }

      if(this.context.continuousIntegration) {
        this.template('travis.yml', '.travis.yml', this.context);
      }

      // PACKAGE

      if(this.context.projectType === 'npm-package-js') {
        this.copy('_index.js', 'src/index.js');

        if(this.context.testing) {
          this.copy('_index.test.js', 'src/index.test.js');
        }
      }

      // APP

      if(this.context.projectType === 'web-app-react') {
        this.copy('_Example.js', 'src/components/Example/Example.js');

        if(this.context.testing) {
          this.copy('_Example.test.js', 'src/components/Example/Example.test.js');
        }

        this.copy('_Main.js', 'src/Main.js');
        this.copy('_webpack.config.js', 'webpack.config.js');
        this.template('_index.html', 'src/index.html', this.context);
      }
    }
  },

  install: function () {
    this.npmInstall();
  }
});
