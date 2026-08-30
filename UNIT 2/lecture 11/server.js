const express = require("express");
const app = express();
const port = 3000;
 
app.get("/students/name", (req, res) => {
  
    console.log(req.url);
    console.log(req.method);
    console.log(req.params.name);
    res.send("Hello Students");n
    
});
app.get("/students", (req, res) => {
    console.log(req.url);
    res.send("Hello Students");
}); 

app.listen(port, () => {
    console.log("Server is running ");
});