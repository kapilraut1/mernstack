fetch('.\test.json')
.then(response => response.json())  // Convert the response to JSON
.then(data => {
  console.log(data);  // Handle the data from the JSON file
})
.catch(error => {
  console.error('Error fetching the JSON file:', error);
});

