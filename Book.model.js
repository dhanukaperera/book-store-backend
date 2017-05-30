/**
 * Created by Dhanuka Perera on 5/27/2017.
 */
'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema({
    title:String,
    author:String,
    category:String
});

module.exports =  mongoose.model('books',BookSchema);