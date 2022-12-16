const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    pages: Number,
    author: String,
    category: { type: String, enum: ["Fantasy", "Science", "Nobel", "Poetry", "Biography"] },
    year: Number
},
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema) //books
