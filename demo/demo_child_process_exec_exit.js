let process = require('process')
let asyncFunctions = require('./async_util')
const { exec } = require('child_process');

setTimeout(()=>{
	exec('ls -al', function(error, stdout, stderr){
		if(error) {
			console.error('error: ' + error);
			return;
		}
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
	});	
},2000)

process.on('exit',(e)=>{
	console.log('process exit')
})

process.on('beforeExit',(e)=>{
	console.log('process before exit')
})