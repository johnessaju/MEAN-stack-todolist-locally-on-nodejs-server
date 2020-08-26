const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/taskdb",(err)=>{
    if(!err){
        console.log('connected to database');
    }
    else
    console.log('cannot connect to database '+JSON.stringify(err,undefined,5));
});

module.exports= mongoose;