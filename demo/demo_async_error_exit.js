let process = require('process')
let asyncFunctions = require('./async_util')

const fs = require('fs');
const async_hooks = require('async_hooks');

let indent = 0;

// async_hooks.createHook({
//   init(asyncId, type, triggerId) {
//     const cId = async_hooks.executionAsyncId();
//     print(`${getIndent(indent)}${type}(${asyncId}): trigger: ${triggerId} scope: ${cId}`);
//   },
//   before(asyncId) {
//     print(`${getIndent(indent)}before:  ${asyncId}`);
//     indent += 2;
//   },
//   after(asyncId) {
//     indent -= 2;
//     print(`${getIndent(indent)}after:   ${asyncId}`);
//   },
//   destroy(asyncId) {
//     print(`${getIndent(indent)}destroy: ${asyncId}`);
//   },
//   promiseResolve(asyncId){
//     print(`${getIndent(indent)}resolve: ${asyncId}`);
//   }
// }).enable();

// function print(str) {
// 	fs.writeSync(1, str + '\n');
// }
  
// function getIndent(n) {
//   return ' '.repeat(n);
// }

asyncFunctions.asyncFunctionWithError(3000,'error at front')

asyncFunctions.asyncFunction(5000,'another async function after')

process.on('uncaughtException',(e)=>{
  console.error(e)
})

process.on('exit',(e)=>{
	console.log('process exit')
})

process.on('beforeExit',(e)=>{
	console.log('process before exit')
})