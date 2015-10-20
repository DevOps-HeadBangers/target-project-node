var dir = require('node-dir');

dir.readFiles(__dirname, {
        exclude: ['LICENSE', '.gitignore', '.DS_Store'],
        excludeDir: ['node_modules', '.git']
    }, function(err, content, next) {
        if (err) throw err;
        var digitalOceanToken = findDigitalOceanToken(String(content));
        var awsToken = findAwsToken(String(content));
        if(awsToken != null || digitalOceanToken != null){
        	console.log("Key in commit. Remove and commit again");
        	process.exit(1);
        }
        next();
    },
    function(err, files) {
        if (err) throw err;
        //console.log('finished reading files:', files);
    });


function findDigitalOceanToken(content){
	return content.match(/\"[a-zA-Z0-9]{63,65}\"/);
}

function findAwsToken(content){
	return content.match(/\"AKI[a-zA-Z0-9]{17,18}\"/);
}
