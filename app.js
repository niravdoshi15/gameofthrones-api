var express=require('express');

var mongoose=require('mongoose');

var path=require('path');

var app=express();

var taskRoutes=require('./routes/battle');

var bodyParser=require('body-parser');


mongoose.connect('mongodb://localhost:27017/gameofthrones',{useMongoClient:true});


mongoose.connection.on("connected",()=>{

console.log("connected to mongodb on port 27017")

})

mongoose.connection.on("error",(err)=>{

if(err)

console.log('failed to connect to mongodb:'+err);

})
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With,Content-Type,Accept");
    res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE')
    next();
})


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.set('port',3030);

app.use('/api',taskRoutes);


app.listen(app.get('port'),function(){

console.log('Application running on '+app.get('port'));

})