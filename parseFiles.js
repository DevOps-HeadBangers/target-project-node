var dir = require('node-dir');

dir.readFiles(__dirname, {
        exclude: ['LICENSE', '.gitignore', '.DS_Store'],
        excludeDir: ['node_modules', '.git']
    }, function(err, content, next) {
        if (err) throw err;
        console.log('content:', content);
        next();
    },
    function(err, files) {
        if (err) throw err;
        console.log('finished reading files:', files);
    });