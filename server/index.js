const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken')
const {expressjwt: exjwt} = require('express-jwt')
const jwt_decode = require('jwt-decode')

const app = new express();
app.use(express.json());
app.use(cors());

var secretkey = "abcd";
var algorithm = "HS256";

var jwtmw = exjwt({
    secret: secretkey,
    algorithms: [algorithm]
});

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.cjqwipx.mongodb.net/?retryWrites=true&w=majority')
client.connect();
const db = client.db('mswdsrp');
const col = db.collection('register');

app.get('/home', (req, res)=> {
    res.send("Home Page");
})

app.post('/insert', (req, res) => {
    console.log(req.body);
    col.insertOne(req.body);
    res.send("suuccessfully received");
})

app.get('/showall', jwtmw, async (req, res) => {
    console.log(req.headers)
    console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)))
    const result = await col.find().toArray();
    res.send(result);
})

app.post('/check', async(req, res) => {
    console.log("entering check")
    const result = await col.findOne({'name':req.body.un})
    var token = null;
    if(result.password == req.body.pw) {
        token = jwt.sign(result, secretkey, {
            algorithm: algorithm,
            expiresIn: "30m"
        })
        res.send({
            msg: result,
            token: token
        })
    }
    else {
        res.send({
            msg: "failed",
            token: token
        })
    }
    console.log(result);
})

app.listen(8081,()=>{console.log("server running")});