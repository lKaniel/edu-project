let express = require('express');
const {addPost} = require("../core/db/postsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let title = req.body.title;
    addPost(title);
});

module.exports = router;
