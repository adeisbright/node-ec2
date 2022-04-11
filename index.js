require("dotenv").config()
const express = require("express")
const cors = require("cors") 
const helmet = require("helmet") 
const compression = require("compression") 

const app = express() 

app.use(express.json()) 
app.use(cors()) 
app.use(compression()) 
app.use(helmet())

app.get("/" , (req , res) => {
    res.status(200).json({
        message : "Hello, World" , 
        statusCode  :200,
        body : []
    })
})

app.listen(3000, () => {
    console.log("The App is running on port 3000")
})