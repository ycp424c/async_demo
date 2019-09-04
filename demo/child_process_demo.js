const {asyncFunction } = require('./async_util')

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


asyncFunction(1000,'child_process_async')