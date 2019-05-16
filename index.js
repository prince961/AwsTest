const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;



//setup express app
const app = express();

//connect to mongoDB
//mongoose.connect('mongodb://localhost/Users');
//mongoose.connect('mongodb://prince961:samepassword@cluster0-shard-00-00-vpjsz.mongodb.net:27017,cluster0-shard-00-01-vpjsz.mongodb.net:27017,cluster0-shard-00-02-vpjsz.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true/Users');
mongoose.Promise = global.Promise;

//const CONNECTION_URL = 'mongodb://prince961:samepassword@cluster0-shard-00-00-vpjsz.mongodb.net:27017,cluster0-shard-00-01-vpjsz.mongodb.net:27017,cluster0-shard-00-02-vpjsz.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true';
//const DATABASE_NAME = "Users";

const dbURI = 'mongodb://prince961:samepassword@cluster0-shard-00-00-vpjsz.mongodb.net:27017,cluster0-shard-00-01-vpjsz.mongodb.net:27017,cluster0-shard-00-02-vpjsz.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true';
  
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  dbName: 'Users',
  useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);





//enable body to be read
app.use(bodyParser.json());

//setup routes
app.use('/api',routes);

/* testing get
app.get('/api',function(req,res){
    console.log('received a get request');
    res.send({name: 'yoshi'});
})*/

app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});


app.listen(4000, function(){
    console.log('now listening for requests');
});
/*
app.listen(process.env.port || 4000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
*/

