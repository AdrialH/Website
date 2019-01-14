const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter a name for the product!"], unique:[true, "This Product already exists."], maxlength:[20, "Name of product must be shorter than 20 characters."], minlength:[3, "Product name must be more than 3 characters"]},
    qty: {type: Number, required:[true, "Please enter a QTY."], min:[0, "QTY must be entered"],},
    price: {type: Number, required:[true, "Please enter a price."]},
}, {timestamps: true});

const CommentSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter a name"], maxlength:[20, "Name must be shorter than 20 characters."], minlength:[2, "Name must be more than 2 characters"]},
    email: {type: String, required:[true, "Please enter and email."]},
    text: {type: String, required:[true,"Please enter a message."], maxlength:[250, "Comment can not have more than 250 characters."], minlength:[1, "Comment feild can not be blank."]},
}, {timestamps: true});

ProductSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

mongoose.model("Product", ProductSchema);

mongoose.model("Comment", CommentSchema);