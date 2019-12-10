const { getAllQuotes, getIDQuote, getFilteredQuote, getSortedByDate } = require('../models/Quote');

const showQuotes = (req, res, next) => {
    getAllQuotes((err, results) => {
        /* req.quote = results;
        console.log(results); */
        if (err) {
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error getting all the quotes'});
        }
        else {
            console.log('We got the quotes succefully');
            //console.log(results);
            // If everything went well
            //res.status(200).json(results);
            res.status(200).render('quotes', { results });
        }
        
    })
    //next();
}

const showQuoteID =(req, res, next) => {
    let id = req.params.id;
    getIDQuote(id, (err, results) => {
    
        if (err) {
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error getting the quote'});
        }
        else {
            console.log('We got the quote succefully')
            //console.log(results);
            // If everything went well
            res.status(200).render('quotes', { results });
        }
    })
    //next();
}

const showQuotesFiltered = (req, res, next) => {
    //console.dir(`This is the req value ${req.query.date}`);
    const date = req.query.date;
    const name = req.query.name;
    const word = req.query.word;
    getFilteredQuote(date, name, word, (err, results) => {
    
        if (err) {
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error getting the quote(s)'});
        }
        else {
            console.log('We got the quote(s) succefully')
            //console.log(results);
            // If everything went well
            res.status(200).render('quotes', { results });
        }
    })
    //next();
}

const showQuotesSorted = (req, res, next) => {
    //console.dir(`This is the req value ${req.query.sort}`);
    const sort = req.query.sort;
    getSortedByDate(sort, (err, results) => {
        
        if (err) {
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error getting the quotes'});
        }
        else {
            console.log('We got the quotes succefully')
            //console.log(results);
            // If everything went well
            res.status(200).render('quotes', { results });
        }
    })
    //next();
}

module.exports = { showQuotes, showQuoteID, showQuotesFiltered, showQuotesSorted }