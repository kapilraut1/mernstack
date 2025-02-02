use("day3");

db.createCollection("champ");

db.champ.insertMany([
    {
        "name": "Ayesha Khan",
        "age": 22,
        "salary":1000
    },
    {
        "name": "Rajesh Kumar",
        "age": 25, 
        "salary": 2000
    },
    {
        "name": "Neha Sharma",
        "age": 19, 
        "salary": 1000
    },
    {
        "name": "Vikram Singh",
        "age": 24
    },
    {
        "name": "Priya Patel",
        "age": 21
    },
    {
        "name": "Ankit Joshi",
        "age": 23
    },
    {
        "name": "Simran Arora",
        "age": 20
    },
    {
        "name": "Ravi Gupta",
        "age": 26
    },
    {
        "name": "Sneha Mehta",
        "age": 18
    },
    {
        "name": "Mohit Desai",
        "age": 27
    }
]
)
// read operations

db.champ.getDB()


