var express=require('express');
var app = express();
//serves files fro; the root directory
app.use(express.static('./'));
app.listen(8080,function(){
        console.log('listening at http://localhost:8080');
});
