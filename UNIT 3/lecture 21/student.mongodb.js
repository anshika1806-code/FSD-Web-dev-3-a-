use("collegeDB")

//db.createCollection("students")
// db.students.insertOne(
//     {rollno:1,name:"John",age:20,course:"Computer Science"}
// )

db.students.insertMany([  
    {rollno:2,name:"Alice",age:21,course:"Mathematics"},
    {rollno:3,name:"Bob",age:22,course:"Physics"},
    {rollno:4,name:"Charlie",age:23,course:"Chemistry"},
 ])