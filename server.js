var express = require('express');
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

// GET https://polar-castle-32257.herokuapp.com/rest/list
// returns list of tickets in memory
router.get('/list', function(req, res) {
    res.status(200).send(tickets);
});

// GET https://polar-castle-32257.herokuapp.com/rest/
// returns API Documentation
router.get('/', function(req, res) {
    res.status(200).send("This is where API Documentation would go.")
});

// GET https://polar-castle-32257.herokuapp.com/rest/ticket/id
// returns ticket with {id}
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

// express.use() statments
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/rest', router);
app.use('/api/ticket/:id', router);

//  Starts server and listens on port defined by variable port
app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });