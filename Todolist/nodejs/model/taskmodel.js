const mongoose=require('mongoose');

var task= mongoose.model('task',{
    task:{type:String}
});

module.exports=task;