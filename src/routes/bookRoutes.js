const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Get all books
router.get('/', bookController.getAllBooks);

// Get a specific book by ID
router.get('/:id', bookController.getBookById);

// Add a new book
router.post('/createBook', bookController.createBook);

// Update a book
router.put('/:id', bookController.updateBook);

// Delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;

