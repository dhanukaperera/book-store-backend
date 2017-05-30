/**
 * Created by Dhanuka Perera on 5/27/2017.
 */
'use strict';
//const mongoose = require('mongoose');
const Book = require('./Book.model');

module.exports = {
    get: (req, res) => {
        console.log('getting all books...');
        Book.find({}).exec((err, books) => {
            if (err) {
                res.send('err')
            }
            else {
                res.json(books);
                console.log(books);
            }
        });
    },
    getByBookId: (req, res) => {
        console.log('getting one book');
        Book.find({
            _id: req.params.id
        }).exec((err, book) => {
            if (err) {
                console.log('error');
            } else {
                res.json(book);
                console.log(book);
            }
        });
    },
    post: (req, res) => {
        Book.create(req.body, (err, book) => {
            if (err) {
                res.send('error while saving...');
            }
            else {
                console.log(book);
                res.send(book);
            }
        });
    },
    put: (req, res) => {
        Book.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.body.title}}, {upsert: true}, (err, newBook) => {
                if (err) {
                    console.log('error occured');
                }
                else {
                    console.log(newBook);
                    res.send(newBook);
                }
            }
        )
    },
    delete: (req, res) => {
        Book.findOneAndRemove({_id: req.params.id}, (err, book) => {
            if (err) {
                res.send('error deleting');
            } else {
                console.log(book);
                res.status(204);
            }
        });
    }
};