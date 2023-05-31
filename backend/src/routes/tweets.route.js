const {Router} = require("express");
const {getTweets, addTweet, getTweet} = require("../controllers/tweets.controllers")
const route = Router();

route.route("/tweets")
.get(getTweets)

route.route("/tweets/:id")
.get(getTweet)

route.route("/newtwt")
.post(addTweet)

module.exports = route;