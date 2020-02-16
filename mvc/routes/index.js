const express = require('express');
const { showHomepage } = require('../controllers/pages-controller');
const {
  showQuotes, showQuoteID, showQuotesFiltered, showQuotesSorted
} = require('../controllers/get-quotes-controller');
const { postAQuote, toggleIsMotivational } = require('../controllers/post-quotes-controller');
const { deleteQuote, deleteNotMotivateMe } = require('../controllers/delete-quotes-controller');

const homeRouter = express.Router();
const quoteRouter = express.Router();

/* GET home page. */
homeRouter.get('/', showHomepage);

/* GET all quotes */
quoteRouter.get('/', showQuotes);
/* GET a quote by id */
quoteRouter.get('/:id', showQuoteID);

/* GET a quote by A filter for data that contains */
homeRouter.get('/get', showQuotesFiltered);

/* GET quotes sort by ASC or DSC dates */
homeRouter.get('/date', showQuotesSorted);

/* POST - Insertion of a new entity */
homeRouter.post('/', postAQuote);

/* PUT - Modification of an entity */
homeRouter.post('/motivation/:id', toggleIsMotivational);

/* DELETE quote */
homeRouter.post('/delete', deleteQuote);

/* DELETE all not motivates me */
homeRouter.post('/delete/notmotivateme', deleteNotMotivateMe);

module.exports = { homeRouter, quoteRouter };
