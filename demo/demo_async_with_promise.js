function c(){
	
	return new Promise(res => {
		setTimeout(()=>{res(456)},1000)
	})
}

async function a(){
	let b = await c();
	console.log(b);
	return new Promise(res1 => {
		setTimeout(()=>{
			res1(new Promise(res2=>{
				setTimeout(()=>{
					res2(789)
				},1000)
			}))
		},1000)
	})
}

a().then(result=>{
	console.log('final result:' + result)
})