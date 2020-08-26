const express = require('express');

var task=require('../model/taskmodel');

var router= express.Router();

router.get('/', (req, res) => {
    task.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/',(req,res)=>{
var tsk = new task({
    task: req.body.task
});
tsk.save((err,doc)=>{
    if(!err)
    res.send(doc);
    else
    res.send("cannot push data"+JSON.stringify(err,undefined,5));

});
});

router.put('/:id',(req,res)=>{

    var tak={
		task:req.body.task
		};

task.findByIdAndUpdate(req.params.id,{$set:tak},{new:true},(err,doc)=>{
    if(!err)
    res.send(doc);
    else
    res.send("cannot update data"+JSON.stringify(err,undefined,5));

});
});

router.delete('/:id',(req,res)=>{
    task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err)
    res.send(doc);
    else
    res.send("cannot delete data"+JSON.stringify(err,undefined,5));
});
});

module.exports = router;