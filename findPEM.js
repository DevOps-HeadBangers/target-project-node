var dir = require('node-dir');

dir.readFiles(__dirname, {
        match: /.pem$/,
        exclude: ['LICENSE', '.gitignore', '.DS_Store'],
        excludeDir: ['node_modules', '.git']
    }, function(err, content, next) {
        if (err) throw err;
        next();
    },
    function(err, files) {
        if (err) throw err;
        if(files.length != 0){
            console.log("PEM file found. Commit failed. Remove PEM file and commit again.");
            process.exit(1);
        }
    });