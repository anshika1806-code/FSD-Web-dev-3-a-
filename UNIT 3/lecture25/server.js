const express = require('express');
const connectDB = require('./config/db');
const dotenv=require('dotenv');
dotenv.config();
const studentRoutes = require('./routes/students.routes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); //json data parse

app.use("/", studentRoutes);

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});