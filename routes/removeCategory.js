let express = require('express');
const {removeCategory} = require("../core/controllers/categoriesController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let id = req.body.id;
    removeCategory(id).then(r => {res.send("removed")});
});

module.exports = router;