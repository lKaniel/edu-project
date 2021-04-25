let express = require('express');
const {removePost} = require("../core/db/postsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let id = req.body.id;
    removePost(id).then(r => {res.send("removed")});
});

module.exports = router;
