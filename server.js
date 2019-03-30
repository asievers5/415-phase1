var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;
var tickets = [{
        "id": 1,
        "owner" : "KC Sievers",
        "subject" : "Math homework due"},
    {
        "id": 2,
        "owner" : "Andrew Sievers",
        "subject" : "415 homework due"
    }];

//This is the section where it will access an endpoint such as:
//https://desolate-atoll-59781.herokuapp.com/api/test (note /api/test/)
router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});

router.get('/list', function(req, res) {
    res.status(200).send(tickets);
});

router.get('/', function(req, res) {
    res.status(200).send("API Docs\n /list to list all tickets\n")
});
router.post('/ticket', function(req, res){
    res.status(200).send(tickets)
});

router.get('/ticket/:id', function(req, res) {
    for(var i = 0; i < tickets.length; i++){
        if(tickets[i].id == req.params.id) {
            status = tickets[i];
            break;
        }
        else {
            status = "Ticket not found";
        }
    }
    res.status(200).send(status);
});



app.use('/api', router);
app.use('/rest', router);
app.use('/api/ticket/:id', router);

app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });