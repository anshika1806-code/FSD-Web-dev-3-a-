use("collegeDB");
//db.students.insert([
// { name: "John Doe",
//     rollno:5,
//     age: 20,
//     courses:"Computer Science"},
// { name: "Jane Smith",
//     rollno:6,
//     age: 22,
//     courses:"Mathematics"},
//     { name: "Alice Johnson",
//     rollno:7,
//     age: 21,
//     courses:"Physics"}, 

// ])
// db.students.aggregate([
//     {
//         $match:{age:20} 
//     },
//     {$project:{_id:0,name:1,rollno:1}},
//     {$group:
//         {_id:"$courses",total:{$sum:1}}
//     },
//     {$sort:{_id:-1}}
// ])
[
  {
    $match:
      /**
       * query: The query in MQL.
       */
      {
        age: 20
      }
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
        name: 1,
        rollno: 1
      }
  },
  {
    $sort:
      /**
       * Provide any number of field/order pairs.
       */
      {
        _id: -1
      }
  }
]

