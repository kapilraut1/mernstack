/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('kaps');

// Insert a few documents into the sales collection.
db.getCollection('tried').insertMany([
    
        { "name": "Kapil Raut", "age": "20" },
        { "name": "Saurabh Kumar", "age": "22" },
        { "name": "Priya Verma", "age": "19" },
        { "name": "Amit Sharma", "age": "21" },
        { "name": "Neha Gupta", "age": "23" },
        { "name": "Ravi Singh", "age": "20" },
        { "name": "Simran Kaur", "age": "18" },
        { "name": "Vikash Yadav", "age": "24" },
        { "name": "Anjali Mehta", "age": "21" },
        { "name": "Rakesh Patel", "age": "25" },
        { "name": "Manisha Roy", "age": "22" }
      
      
]);


// Print a message to the output window.
console.log(`done`);

