/*
 导入express
 声明app
*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var json = require('./json/index.json')
    /*
     静态文件托管
    */
app.use('/js', express.static('js'));
app.use('/demo', express.static('demo'));
app.use('/css', express.static('css'));
app.use(express.static('json'));

//*路由首页*/
app.get('/', function(req, res) {
    res.sendfile('index.html')
});
app.get('/nameList', function(req, res) {
    res.json(json)
})
app.post('/nameShow', function(rea, res) {
    console.log(req.body)

})



app.listen(3200);

module.exports = app;