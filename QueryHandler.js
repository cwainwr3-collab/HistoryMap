//function simply displays entered text on the html page
function tester(queryExample) 
{
  console.log(queryExample + " test working");
  return exampleQuery(queryExample);
}


//note, put "npm install mysql2" into terminal for this to work
//NOTE: NEED connection.end(); SOMETIME WHEN EXITING PROGRAM
function connectToDatabase()
{
  const mysql = require('mysql2');

  const connection = mysql.createConncetion({
    host: 'localhost', //databse server IP/hostname
    user: 'your_username',
    password: '20013736', //do not hard code this in final ver
    database: 'your_data_base_name'
  })

  connection.connect((err) => {
    if (err) 
    {
      console.error('error connecting to database:', err);
      return;
    }
    console.log('connected to the mysql database')
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
