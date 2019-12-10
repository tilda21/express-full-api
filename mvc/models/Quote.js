const connection = require('../db/conf');
/* connection.connect(); */

/* class Quote {
    constructor() {

    }
} */
/* Go to this link and also search ways how to call the database in order to apply a function here
for example : Quote.getAll or motivacion.getAll
https://ipenywis.com/tutorials/What-is-the-MVC,-Creating-a-%5BNode.js-Express%5D-MVC-Application
*/

let getAllQuotes = (callback) => {
    connection.query(
        'SELECT id, DATE_FORMAT(dateOfPublication, "%m/%y") as date, author, quote, isMotivated FROM motivacion',
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )
}

let getIDQuote =  (id, callback) => {
    const idQuote = id;
    //console.log(idQuote);
    connection.query(
        'SELECT DATE_FORMAT(dateOfPublication, "%m/%y") as date, author, quote  FROM motivacion WHERE id = ?',
        idQuote,
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )
}

let getFilteredQuote =  (date, name, word, callback) => {
/*     console.log(name); */
    //if the filter is a date then do the following query
    if(date) {
        connection.query(
            'SELECT DATE_FORMAT(dateOfPublication, "%m/%y") as date, author, quote  FROM motivacion WHERE dateOfPublication > ?',
            date,
            (err, results, fields) => {
                callback(err, results, fields);
            }
        )
    }
    //else if the filter is a name then do the following query
    else if(name) {
        console.log(name)
        connection.query(
            `SELECT DATE_FORMAT(dateOfPublication, '%m/%y') as date, author, quote  FROM motivacion WHERE author LIKE '${name}%'`,
            (err, results, fields) => {
                console.log(results);
                callback(err, results, fields);
            }
        )
    }
    //else the filter is a word and then do the following query
    else {
        connection.query(
            `SELECT DATE_FORMAT(dateOfPublication, '%m/%y') as date, author, quote  FROM motivacion WHERE quote LIKE '%${word}%'`,
            (err, results, fields) => {
                callback(err, results, fields);
            }
        )
    }
    
}

//sort the quotes by order asc or dsc
let getSortedByDate = (sort, callback) => {
    console.log(sort);
    connection.query(
        `SELECT DATE_FORMAT(dateOfPublication, "%m/%y") as date, author, quote  FROM motivacion ORDER BY dateOfPublication ${sort}`,
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )
    
}

let postQuote = (date, name, word, callback) => {
    console.log(date, name, word);
    connection.query(
        `INSERT INTO motivacion (dateOfPublication, author, quote) VALUES ('${date}', '${name}', '${word}')`,
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )

}

let toggleMotivation = (id, callback) => {
    connection.query(
        'UPDATE motivacion SET isMotivated = !isMotivated WHERE id=?',
        id,
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )

}

let eliminate = (id, callback) => {
    connection.query(
        'DELETE FROM motivacion WHERE id=?',
        id,
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )

}

let eliminateNotMotivateMe = (callback) => {
    connection.query(
        'DELETE FROM motivacion WHERE !isMotivated',
        (err, results, fields) => {
            callback(err, results, fields);
        }
    ) 
}
module.exports = { getAllQuotes, getIDQuote, getFilteredQuote, getSortedByDate , postQuote, toggleMotivation, eliminate, eliminateNotMotivateMe };