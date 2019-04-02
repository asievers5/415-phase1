var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;
var bodyParser = require('body-parser');
var tickets = [{
        "id": 1,
        "owner" : "KC Sievers",
        "subject" : "Math homework due"},
    {
        "id": 2,
        "owner" : "Andrew Sievers",
        "subject" : "415 homework due"
    }];

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

// POST http://localhost:8080/api/users
// parameters sent with 
router.post('/rest/ticket', function(req, res) {
    var id = req.body.id;
    var owner = req.body.owner;
    var subject = req.body.subject;
    var ticket = {
        id,
        owner,
        subject
    }
    tickets.push(ticket);

    res.send(id + ' ' + owner + ' ' + subject);
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