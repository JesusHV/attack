var request = require('request'),
	fs = require('fs'),
	https =require('https');

//do{
	for (var i = 0; i < 10000; i++) {		
		var options = {
	    	host: '172.19.0.80',
	    	port:'8002',
	    	path: '/api/users/login',
	    	cert: fs.readFileSync('./e1f8ce44-b098-4c92-940c-c52ca493e538.public.pem'),
	    	key: fs.readFileSync('./e1f8ce44-b098-4c92-940c-c52ca493e538.private.pem'),
	    	body:{
	    		tipo:'Persona',
	    		email:'adsad',
	    		password:'123'
	    	},
	    	method:'POST',
	    	json:true,
	    	headers: {
				accept: '*/*'
			},
			strictSSL: false
	    }
		var req = https.request(options, function(res) {
		  console.log(res.statusCode);
		  res.on('data', function(d) {
		    process.stdout.write(d);
		  });
		});
		req.end();

		req.on('error', function(e) {
		  console.error(e);
		});
	};
//}while(true)