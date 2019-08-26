let process = require('process')
let asyncFunctions = require('./async_util')
const { fork } = require('child_process');


fork('./child_process_demo')
process.on('exit',(e)=>{
	console.log('process exit')
})

process.on('beforeExit',(e)=>{
	console.log('process before exit')
})