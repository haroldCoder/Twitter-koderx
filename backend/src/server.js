const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./db/credentials");
const db = require("./db/connect");
const app = express();
const cors = require("cors");

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(cors({
    origin: 'https://twitter-koderx-clone.vercel.app',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']
}));

app.use("/apitwt", require("./routes/users.route"));
app.use("/apitwt", require("./routes/tweets.route"))

app.listen(PORT, (err, res)=>{
    if(err) throw err;
    console.log(`server on port ${PORT}`);
})