const { eliminate, eliminateNotMotivateMe } = require('../models/Quote');

const deleteQuote = (req, res, next) => {
    //console.log(req.body.id)
    let id = req.body.id;
    eliminate(id, (err, results) => {
        if (err) {
            console.log(err);
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error deleting the quote'});
        }
        else {
            console.log('The quote was deleted succefully');
            res.redirect("/quote");
        }
        
    })
    //next();
}

const deleteNotMotivateMe  = (req, res, next) => {

    eliminateNotMotivateMe((err, results) => {
        if (err) {
            console.log(err);
            //  If an error has occurred, then the user is informed of the error
            res.status(500).json({message: 'Error deleting the quote'});
        }
        else {
            console.log('The quote was deleted succefully');
            res.redirect("/quote");
        }
        
    })
    //next();
}
module.exports = { deleteQuote, deleteNotMotivateMe }