#!/usr/bin/env node

const Inquirer = require('inquirer')
const CopyDir = require('copy-dir')
const Path = require('path')
const Fs = require('fs')
const Replace = require('replace-in-file')
const Execa = require('execa')

const target = process.cwd()
const name = Path.basename(target)
const source = Path.join(__dirname, 'template')

Inquirer.prompt([
  {
    type: 'confirm',
    name: 'continue',
    message: `Creating Koa.js TypeScript (koats) project named "${name}" in ${target}.  Look good?`
  }
]).then(answers => {
  if (answers.continue) {
    console.log('running...')
    CopyDir.sync(source, target)
    Fs.renameSync(
      Path.join(target, '_package.json'),
      Path.join(target, 'package.json')
    )
    Replace.sync({
      files: Path.join(target, 'package.json'),
      from: /\{\{name\}\}/g,
      to: name
    })
    Replace.sync({
      files: Path.join(target, 'src/config/default.ts'),
      from: /\{\{name\}\}/g,
      to: name
    })
    Execa.sync('npm', ['i'])
    console.log(
      '...done! (You can now run `npm run dev` to start the dev server)'
    )
    console.log(' ** Checkout the `README.md` for more information. **')
  } else {
    console.log('ok, never mind.')
  }
})
