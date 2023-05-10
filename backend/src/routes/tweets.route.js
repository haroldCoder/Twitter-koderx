const {Router} = require("express");
const {getTweets, addTweet} = require("../controllers/tweets.controllers")
const route = Router();

route.route("/tweets")
.get(getTweets)

route.route("/newtwt")
.post(addTweet)

module.exports = route;