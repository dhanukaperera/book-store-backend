/**
 * Created by Dhanuka Perera on 5/27/2017.
 */
'use strict';
// Node modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParsher = require('body-parser');

// Customs modules
const books = require('./Book.controller');

const app = express();

const db = 'mongodb://localhost/example';
const port = 3000;


//Middleware
app.use(bodyParsher.json());
app.use(bodyParsher.urlencoded({
    extended: true
}));


//Requests
app.get('/books',books.get);
app.get('/books/:id',books.getByBookId);
app.post('/books',books.post);
app.put('/books/:id',books.put);
app.delete('/books/:id',books.delete);


//Connection
mongoose.connect(db,(err)=>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.log('connected mongodb');
});


app.listen(port,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(`app listing on ${port}`);
});