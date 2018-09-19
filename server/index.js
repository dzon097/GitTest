const expess = require('expess');

const app = expess(5000, ()=>{
	console.log('Listening on http://localhost:5000');
});