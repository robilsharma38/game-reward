const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  createBook: async (req, res) => {
    try {
      const { title, author, summary } = req.body;
      console.log('req.body :>> ',req.body );
      const book = new Book({ title, author, summary });
      console.log('book :>> ', book);
      const newBook = await book.save();
      console.log('newBook :>> ', newBook);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  updateBook: async (req, res) => {
    try {
      const { title, author, summary } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        { title, author, summary },
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = bookController;
