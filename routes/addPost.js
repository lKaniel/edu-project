let express = require('express');
const {addPost} = require("../core/db/postsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.body);
    let title = req.body.title;
    addPost(title).then(r => {res.send("added")});
});

module.exports = router;
