const connection = require('./conf');

connection.query(`CREATE TABLE motivacion (
    id int(11) NOT NULL,
    dateOfPublication date NOT NULL,
    author text(40) NOT NULL,
    quote varchar(255) NOT NULL DEFAULT '',
    isMotivated boolean
    );
    ALTER TABLE motivacion ADD PRIMARY KEY (id);
    ALTER TABLE motivacion MODIFY id int(11) NOT NULL AUTO_INCREMENT;`, (err) => {
  if (err) console.log(err);

  console.log('query complete');
  connection.end();
});
