const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Please enter a name for the product!"], unique:[true, "This Product already exists."], maxlength:[20, "Name of product must be shorter than 20 characters."], minlength:[3, "Product name must be more than 3 characters"]},
    qty: {type: Number, required:[true, "Please enter a QTY."], min:[0, "QTY must be entered"],},
    price: {type: Number, required:[true, "Please enter a price."]},
}, {timestamps: true});


ProductSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

mongoose.model("Product", ProductSchema);

