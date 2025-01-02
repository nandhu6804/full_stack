var express = require('express')
var app = express()
const PORT = 3001

/*app.get('/',(req,res)=>{
    res.send("Welcome here....")//prints first
})*/

app.get('/', (req, res) => {
    res.send("Welcome....")//notprints
})

app.get('/json', (req, res) => {
    res.json({ server: "Welcome....", url: "localhost", port: "3001" })//localhost:3001/json
})

app.get('/static', (req, res) => {
    res.sendFile('C:\Users\Nandhitha\Videos\fullstack\backend\index.html')
})


app.listen(PORT, () => {
    console.log(`Backend server started...\nURL: http://localhost:${PORT}`)
})