let express = require('express');
const {getCategories} = require("../core/db/categoriesDBController");
let router = express.Router();

router.get('/', function (req, res, next) {
    getCategories().then(r => res.send(r))
});

module.exports = router;
