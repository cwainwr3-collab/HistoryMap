//function simply displays entered text on the html page
function tester(queryExample) 
{
  console.log(queryExample + " test working");
  connectToDatabase();
  return exampleQuery(queryExample);
}

//import mysql from 'mysql2';
function connectToDatabase() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20013736',
    database: 'richlist',
    port: 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting:', err);
      return;
    }
    console.log('Connected to MySQL!');
  });
}

//use this on billionaire dataset for testing, returns all billionaires from given country (lowercase)
function exampleQuery(country)
{
  const selectQuery = "SELECT * FROM billionaires WHERE country = ?";
  const value = [country];

  connection.query(selectQuery, values, function (error, results, fields) 
  {
    if (error) 
    {
      console.error('Error executing query:', error);
      return;
    }

    console.log('Query results:', results);
    // Process the results (results is an array of objects)
    if (results.length > 0) 
    {
      console.log('User found:', results[0]);
    } 
    else 
    {
      console.log('User not found.');
    }
  });
}
