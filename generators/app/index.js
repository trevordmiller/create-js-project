'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
// var beautify = require('gulp-beautify');
// var gulpFilter = require('gulp-filter');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(chalk.cyan('                                         '));
    this.log(chalk.cyan('-----------------------------------------'));
    this.log(chalk.cyan('                  NEXUS                  '));
    this.log(chalk.cyan('  A starter kit for modern JS projects   '));
    this.log(chalk.cyan('-----------------------------------------'));
    this.log(chalk.cyan('                                         '));

    var prompts = [
      {
        type: 'list',
        name: 'projectType',
        message: 'Type of project',
        choices: [
          {
            name: 'JS package (npm)',
            value: 'package'
          },
          {
            name: 'web app (React)',
            value: 'app'
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
        type: 'confirm',
        name: 'editorconfig',
        message: 'Add editor config (EditorConfig)',
        default: true
      },
      {
        type: 'confirm',
        name: 'linting',
        message: 'Add linting (ESLint)',
        default: true
      },
      {
        type: 'confirm',
        name: 'testing',
        message: 'Add testing (Mocha)',
        default: true
      },
      {
        type: 'confirm',
        name: 'continuousIntegration',
        message: 'Add Continuous Integration (Travis CI)',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {

      this.context = {
        projectType: props.projectType,
        projectName: props.projectName,
        projectDescription: props.projectDescription,
        authorInfo: props.authorInfo,
        githubUsername: props.githubUsername,
        editorconfig: props.editorconfig,
        linting: props.linting,
        testing: props.testing,
        continuousIntegration: props.continuousIntegration
      };

      done();
    }.bind(this));
  },

  writing: {

    files: function () {

      // See "Transform output files through streams"
      // http://yeoman.io/authoring/file-system.html
      // var beautifyFilter = gulpFilter([
      //   '_package.json'
      // ]);
      // this.registerTransformStream(beautifyFilter(beautify({
      //   indentSize: 2,
      //   indentChar : ' ',
      //   preserveNewlines : false
      // })));

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
        this.copy('travis.yml', '.travis.yml');
      }

      // PACKAGE

      if(this.context.projectType === 'package') {
        this.copy('_index.js', 'src/index.js');

        if(this.context.testing) {
          this.copy('_index.test.js', 'src/index.test.js');
        }
      }

      // APP

      if(this.context.projectType === 'app') {
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
