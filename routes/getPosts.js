let express = require('express');
const {getPosts} = require("../core/db/postsController");
let router = express.Router();

router.get('/', function (req, res, next) {
    res.send(getPosts())
});

module.exports = router;
