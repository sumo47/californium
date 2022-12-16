const bookModel = require('../models/bookModel.js')

const createBook = async function(req,res){
    let data = req.body
    let newBook = await bookModel.create(data)
    res.send({msg : newBook})
}

const allBooks = async function(req,res){
    let newBook = await bookModel.find()
    res.send({msg : newBook})
}
module.exports.createBook = createBook
module.exports.allBooks = allBooks