var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;
var tickets = {
    "ticket":[{
    "id": 35436,
    "created_at": "2015-07-20T22:55:29Z",
    "updated_at": "2016-05-05T10:38:52Z",
    "type": "incident",
    "subject": "MFP not working right",
    "description": "PC Load Letter? What does that even mean???",
    "priority": "med",
    "status": "open",
    "recipient": "support_example@selu.edu",
    "submitter": "Michael_bolton@selu.edu",
    "assignee_id": 235323,
    "follower_ids": [235323, 234],
    "tags": ["enterprise", "printers"]},
    {
        "id": 352342436,
        "created_at": "2018-12-20T14:54:23Z",
        "updated_at": "2019-01-04T12:38:22Z",
        "type": "incident",
        "subject": "MFP Totally working great",
        "description": "Its uhh. Its just working.",
        "priority": "too high",
        "status": "closed",
        "recipient": "support_example@selu.edu",
        "submitter": "Michael_bolton_office_friends@selu.edu",
        "assignee_id": 234593,
        "follower_ids": [25323, 214],
        "tags": ["enterprise", "printers"]}
    ]
   }

//This is the section where it will access an endpoint such as:
//https://desolate-atoll-59781.herokuapp.com/api/test (note /api/test/)
router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});

router.get('/list', function(req, res) {
    res.status(200).send(tickets);

});

router.post('/ticket', function(req, res){

});

app.use('/api', router);
app.use('/rest', router);

app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });