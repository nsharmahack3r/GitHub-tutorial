const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('Hello World');
});

app.get('/greet',(req, res)=>{
    res.send('Greetings from DartBucket');
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});