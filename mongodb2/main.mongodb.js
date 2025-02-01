use('kaps')
db.createCollection("day2")

db.day2.insertOne({
    name: "Kapil Raut", 
    age: 20
})

// create db
use('success')

db.createCollection('Happy')

db.Happy.insertMany([
    {
        "name": "Ayesha Khan",
        "age": 22
    },
    {
        "name": "Rajesh Kumar",
        "age": 25
    },
    {
        "name": "Neha Sharma",
        "age": 19
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
