module.exports.asyncFunction = function(timeout,id){
	return new Promise(resolve=>{
		setTimeout(()=>{
			console.log('async function resolve: ' + id)
			resolve('async function resolve: ' + id)
		},timeout)
	})
}


module.exports.asyncFunctionWithError = function (timeout,id){
	return new Promise(resolve=>{
		setTimeout(()=>{
			console.error('async Function throw Error: ' +id)
			throw new Error('async Function throw Error: ' +id)
		},timeout)
	})
}

module.exports.asyncFunctionWithReject = function (timeout,id){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.error('async function reject: '+ id)
			reject(new Error('async function reject: '+ id))
		},timeout)
	})
}