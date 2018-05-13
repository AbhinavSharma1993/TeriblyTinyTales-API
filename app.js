const express=require('express');
const fetchWord=require('./BusinessLogic/fetchWords');
const app=express();
const port = process.env.PORT || 3000;

app.get('/wordlist/:number', (req, res) => {
    var number = req.params.number;
    var words=fetchWord.fetchWords(number).then((data)=>{
        if(!data){
            return res.status(400).send();
        }
        res.send({data});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};