let express = require('express');
const {addPost} = require("../core/db/postsDBController");
let router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.name !== undefined){
        res.sendFile(path.join(__dirname, `./uploads/${name}`));
    }else{
        res.send("ERROR");
    }
});

module.exports = router;
