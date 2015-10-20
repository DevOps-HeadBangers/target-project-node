var child_process = require('child_process');
var exec = child_process.exec;
var fs = require("fs");

exec('git diff-index --name-status HEAD -- | cut -c3-', function(err, stdout, stderr) {

    if (err) {
        console.log('Child process exited with error code', err.code);
        return
    }

    var fileNames = stdout.substring(0, stdout.length - 1).split("\n");

    for (var i = 0; i < fileNames.length; i++) {
        var fileName = fileNames[i];
        var fileExt = fileName.split('.').pop();

        if (fileExt == 'pem') {
            console.log("PEM file found. Commit failed. Remove PEM file and commit again.");
            process.exit(1);
        }

        fs.readFile(fileName, 'utf8', function(err, data) {
            if (err) throw err;
            var digitalOceanToken = findDigitalOceanToken(String(data));
            var awsToken = findAwsToken(String(data));
            if (awsToken != null || digitalOceanToken != null) {
                console.log("Key in commit. Remove and commit again.");
                process.exit(1);
            }
        });

    }

});

function findDigitalOceanToken(content) {
    return content.match(/\"[a-zA-Z0-9]{63,65}\"/);
}

function findAwsToken(content) {
    return content.match(/\"AKI[a-zA-Z0-9]{17,18}\"/);
}