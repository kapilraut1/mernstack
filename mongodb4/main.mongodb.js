use("day6")
/*
db.try.insertOne({
    name: "Kaps",
    age: 20
})

db.try.insertMany([{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
},{
    name: "Kaps",
    age: 20
}])

db.try.findOne({name: "Kaps"}, {age: 1})

db.prac.insertMany ([ {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }])
  

 // db.prac.findOne()
 //db.prac.find({}, {title:0})

 //db.prac.updateOne({}, {$set: {likes: 4}})
 db.prac.updateOne( 
    { title: "Post Title 5" }, 
    {
      $set: 
        {
          title: "Post Title 5",
          body: "Body of post.",
          category: "Event",
          likes: 5,
          tags: ["news", "events"],
          date: Date()
        }
    }, 
    { upsert: true }
  )
 */
  db.prac.updateMany({}, { $inc: { likes: 1 } })