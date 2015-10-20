var fs    = require('fs');
var sloc  = require('sloc');
 
fs.readFile("index.js", "utf8", function(err, code){
 
  if(err){ console.error(err); }
  else{
    var stats = sloc(code,"js");
    for(i in sloc.keys){
      var k = sloc.keys[i];
      console.log(k + " : " + stats[k]);
    }

    var ratio = stats["comment"] / stats["source"];
    console.log("comment to code Ratio: " + ratio);

  }
});