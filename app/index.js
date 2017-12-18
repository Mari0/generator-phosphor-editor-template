var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        },
        {
            type: 'input',
            name: 'author',
            message: 'Your name',
            default: ''
        }, {
            type: 'confirm',
            name: 'install',
            message: 'Would you like to install dependencies?'
        }
        ]).then((answers) => {
            this.answers = answers;
        });
    }

    copySrc() {
        console.log('Copy' + this.templatePath('../src') + '-folder to ' + this.destinationPath('./src'));
        this.fs.copy(this.templatePath('../src/**'), this.destinationPath('./src'));
        console.log('Copy' + this.templatePath('../style') + '-folder to ' + this.destinationPath('./style'));
        this.fs.copy(this.templatePath('../style/**'), this.destinationPath('./style'));
        this.fs.copy(this.templatePath('../tsconfig.json'), this.destinationPath('./tsconfig.json'));
        this.fs.copy(this.templatePath('../webpack.config.js'), this.destinationPath('./webpack.config.js'));
    }

    copyPackageJson() {
        this.fs.copyTpl(
            this.templatePath('../package.json.tpl'),
            this.destinationPath('./package.json'),
            {
                name: this.answers.name,
                author: this.answers.author
            }
        );
    }

    install() {
        if (this.answers.install)
            this.installDependencies({
                bower: false,
                npm: true
            }).then(() => console.log('Everything is ready!'));
    }
};
