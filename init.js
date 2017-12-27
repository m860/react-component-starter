var fsExtra = require("fs-extra");
var fs = require("fs");
var path = require("path");
var argv = require('yargs')
	.usage('usage: $0 <TARGET_FOLDER> [options]')
	.alias('u', 'url')
	.alias('n', 'name')
	.demandOption(['u', 'n'])
	.help("h")
	.alias('h', 'help')
	.argv;


var targetFolder;
if (argv._.length >= 1) {
	targetFolder = argv._[0];
}

console.log('target path = ' + targetFolder);

if (!fsExtra.pathExistsSync(targetFolder)) {
	fsExtra.mkdirsSync(targetFolder);
}

//copy
fsExtra.copySync(path.join(__dirname, 'LICENSE'), path.join(targetFolder, 'LICENSE'), {overwrite: true});
fsExtra.copySync(path.join(__dirname, 'build.sh'), path.join(targetFolder, 'build.sh'), {overwrite: true});
fsExtra.copySync(path.join(__dirname, '.npmignore'), path.join(targetFolder, '.npmignore'), {overwrite: true});
console.log('copying .gitignore')
fsExtra.copySync(path.join(__dirname, '.gitignore'), path.join(targetFolder, '.gitignore'), {overwrite: true});
console.log('copying .babelrc')
fsExtra.copySync(path.join(__dirname, '.babelrc'), path.join(targetFolder, '.babelrc'), {overwrite: true});
fsExtra.copySync(path.join(__dirname, '.browserslistrc'), path.join(targetFolder, '.browserslistrc'), {overwrite: true});
fsExtra.copySync(path.join(__dirname, 'postcss.config.js'), path.join(targetFolder, 'postcss.config.js'), {overwrite: true});
console.log('copying .eslintrc')
fsExtra.copySync(path.join(__dirname, '.eslintrc'), path.join(targetFolder, '.eslintrc'), {overwrite: true});
console.log('copying package.json')
fsExtra.copySync(path.join(__dirname, 'package.json'), path.join(targetFolder, 'package.json'), {overwrite: true});
console.log('copying webpack.config.js')
fsExtra.copySync(path.join(__dirname, 'webpack.config.js'), path.join(targetFolder, 'webpack.config.js'), {overwrite: true});
console.log('copying src/')
fsExtra.copySync('./src', path.join(targetFolder, 'src'), {overwrite: true});
console.log('copying test/')
fsExtra.copySync('./test', path.join(targetFolder, 'test'), {overwrite: true});

//replace url & name
console.log('replacing name & url')
var fileStr = fs.readFileSync(path.join(targetFolder, 'package.json'), 'utf8');
fileStr = fileStr.replace(/https:\/\/github\.com\/m860\/react-component-starter/g, argv.url);
fileStr = fileStr.replace(/react\-component\-starter/g, argv.name);
fs.writeFileSync(path.join(targetFolder, 'package.json'), fileStr);
console.log('init success');


