const chalk = require('chalk');
const program = require('commander');
var inquirer = require('inquirer'); // 用户输入

program
  .version('0.1.0', '-v, --version')
  .usage('[options] <file ...>')
  .option('-i, --init', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble');

program
  .command('init <env>')
  .option("-u, --url [url]", "仓库地址")
  .option("-n, --name [name]", "名称")
  .action(function (env, options) {
    var mode = options.url || "normal";
    env = env || 'all';
    inquirer.prompt([
      {
        name: 'name',
        type: 'input',
        message: `请输入name?`
      },
      {
        name: 'author',
        type: 'input',
        message: `请输入author?`
      },
      {
        name: 'author',
        type: 'input',
        message: `请输入口文件[index.js]?`
      },
      {
        name: 'action',
        type: 'list',
        message: `Target directory ${chalk.cyan('222')} already exists. Pick an action:`,
        choices: [
          { name: 'Overwrite', value: 'overwrite' },
          { name: 'Merge', value: 'merge' },
          { name: 'Cancel', value: false }
        ]
      }
    ]).then(answers => {
      console.log(answers);
    });
  });

program
  .command('rmdir <dir> [otherDirs...]')
  .action(function (dir, otherDirs) {
    console.log('rmdir %s', dir);
  });

console.log('this is a cli test program');

program.parse(process.argv)
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);