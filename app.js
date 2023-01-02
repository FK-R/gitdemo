const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded());


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
res.render("/index.html", {intArr:'intArr'});

  

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



app.listen(process.env.port || 3000);

console.log('Running at Port 3000');