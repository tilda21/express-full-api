const { postQuote, toggleMotivation } = require('../models/Quote');

const postAQuote = (req, res, next) => {
  const date = req.body.dateDate;
  const name = req.body.authorName;
  const word = req.body.quoteText;
  // console.log(date);
  postQuote(date, name, word, (err, results) => {
    /* req.quote = results;
        console.log(results); */
    if (err) {
      console.log(err);
      //  If an error has occurred, then the user is informed of the error
      res.status(500).json({ message: 'Error posting the quote' });
    } else {
      console.log('The quote was posted succefully');
      // console.log(results);
      // If everything went well
      // res.status(200).json(results);
      // res.status(200).json({message: 'The quote was posted succefully'});
      res.redirect('/');
    }
  });
  // next();
};

const toggleIsMotivational = (req, res, next) => {
  const { id } = req.params;
  console.log('toggleIsMotivational was called');
  toggleMotivation(id, (err) => {
    if (err) {
      console.log(err);
      //  If an error has occurred, then the user is informed of the error
      res.status(500).json({ message: 'Error changing motivation value' });
    } else {
      console.log('The motivation value was changed succefully');
      res.redirect('/quote');
    }
  });
  // next();
};
module.exports = { postAQuote, toggleIsMotivational };
