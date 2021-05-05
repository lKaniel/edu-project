let express = require('express');
const {createPost} = require("../core/controllers/postsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.body);
    let title = req.body.title;
    createPost(title).then(r => {res.send("added")});
});

module.exports = router;
