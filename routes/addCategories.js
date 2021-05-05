let express = require('express');
const {createCategory} = require("../core/controllers/categoriesController");
let router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.body);
    let title = req.body.title;
    createCategory(title).then(r => {res.send("added")});
});

module.exports = router;
