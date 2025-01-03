var express =require('express')
var path = require('path')
app=express()
const PORT =3001;
app.get('/',(req,res)=>{
    res.json('hello!!!let\'s learn')
})
app.get('/json',(req,res)=>{
    res.json({server:'hello!!!',url:'localhost',port:'3001'})
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/html2', (req, res) => {
    res.sendFile(path.join(__dirname,'index2.html'));
});

app.listen(PORT,()=>{
    console.log('Backend Server Started\nURL: http://localhost:3001')
})