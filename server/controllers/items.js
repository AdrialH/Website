const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const Comment = mongoose.model("Comment");

module.exports = {
    
    index: (req, res)=>{
        Product.find({})
        .then(items => res.json(items))
        .catch(err => res.send(err));
    },
    
    create: (req, res)=>{
        Product.create(req.body)
        .then(items => res.json(items))
        .catch(err => res.send(err));
    },
    
    
    show: (req, res)=>{
        console.log("Show in item.js", req.params.id);
        Product.findById(req.params.id).then(item => res.json(item)).catch(err => res.json(err)); 
        
    },
    
    edit: (req, res)=>{
        Product.findById(req.params.id)
        .then(items => res.json(items))
        .catch(err => res.send(err));
    },
    
    update: (req, res) => {
        console.log("Updating");
        Product.findByIdAndUpdate(req.params.id, req.body, { runValidators:true, context:"query" })
        .then(item => res.json(item))
        .catch(err => res.send(err));
    },
    
    delete: (req, res)=>{
        Product.findByIdAndRemove(req.params.id, req.body)
        .then(items => res.json(items))
        .catch(err => res.send(err));
    },

    comments: (req, res)=>{
        Comment.find({})
        .then(comments => res.json(comments))
        .catch(err => res.send(err));
    },

    comment:(req,res) => {
        Comment.create(req.body)
        .then(comment =>{res.json(comment);})
        .catch(err => res.send(err));
    },

    remove: (req, res)=>{
        Comment.findByIdAndRemove(req.params.id, req.body)
        .then(items => res.json(items))
        .catch(err => res.send(err));
    },
};