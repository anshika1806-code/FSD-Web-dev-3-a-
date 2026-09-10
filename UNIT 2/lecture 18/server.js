const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    
    let age=18
    
    try{
        if(age>=18){
            throw new Error("Age is invalid");
        }else{
            res.send('Welcome to the home page');
        }
    } catch (err) {
        // res.status(400).send({
        //     Success: false,
        //     Message: err.message
        // });
        next(err);
    }
    app.use((req, res) => {
        res.status(404).send({
            success: false,
            message: "Page not found"
        });
    });
    
})
app.use((err, req, res, next) => {
    res.status(500).send({
        success: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})