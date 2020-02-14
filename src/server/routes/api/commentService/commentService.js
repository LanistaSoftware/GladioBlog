const exprees= require('express');
const mongodb =require('mongodb');
const router = exprees.Router();
const mongoose = require('mongoose');
const connectService = require('../ConnectService/connectService');

router.put('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.findOneAndUpdate({ _id: new mongodb.ObjectId(req.params.blogid)},{$push:{comment: [{content: req.query.content,name:req.query.name,email:req.query.email,website:req.query.website,date:req.query.date,commentid:new mongodb.ObjectId}]}});
    res.send(200).send();
});
router.delete('/:blogid',async (req,res)=>{
    const post = await connectService.loadpost();
    await post.updateOne({ _id:new mongodb.ObjectId(req.params.blogid) },{$set:{comment:[]}})
    res.send(200).send();
});

module.exports=router;      