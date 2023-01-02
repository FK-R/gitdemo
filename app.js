const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded());
app.get('/',(req,res)=>{

res.sendFile(path.join(__dirname+'/index.html'))

})

app.get('/submit',function(req,res){
 
  res.json({'message':'hello'})
});


app.post('/',(req,res)=>{
    res.send(req.body)
    const array = req.body;

    console.log(req.body.name);
    var myInt = req.body.name;
    
    let myFunc = num => Number(num); 
    var intArr = Array.from(String(myInt), myFunc);
    console.log(Math.max.apply(null, intArr))
    console.log(intArr);
})



app.listen(process.env.port || 5000);

console.log('Running at Port 5000');