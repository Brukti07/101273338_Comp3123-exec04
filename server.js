const express = require("express")

const SERVER_PORT = 8088
const app = express()

app.get("/hello", (req, res) => {
    res.send("<h1>Hello + Express JS")

})


//query paramerter

app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.query))
})

//path parameter
app.post("/user/:firstname/:lastname", (req, res) => {
    res.send(JSON.stringify(req.params))

})

app.listen(SERVER_PORT, () =>{
    console.log (`Server Started at http://localhost:${SERVER_PORT}`)
})