#!/usr/bin/env node
import path, {resolve} from 'node:path'
import fs from 'node:fs'
import {pathToFileURL} from 'node:url'

console.log('executed with > npx digplan/npx-test')
console.log('working directory is ' + process.cwd())
console.log('path resolve for class.mjs is ' + resolve('class.mjs'))
console.log('file url is ' + pathToFileURL(resolve('class.mjs')))
console.log('working directory is ' + process.cwd())

import C from './class.mjs'
const i = new C()
i.func()

console.log('open file using resolve')
fs.readFileSync(resolve('class.mjs'))

console.log('import file using resolve')
await import(pathToFileURL(resolve('class.mjs')))