#!/usr/bin/env node
console.log('executed with > npx digplan/npx-test')

console.log('working directory is ' + process.cwd())

import C from './class.mjs'
const i = new C()
i.func()
