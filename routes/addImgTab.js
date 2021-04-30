let express = require('express');
const {addTab} = require("../core/db/tabsController");
const multer = require("multer");
const fs = require("fs");

const handleError = (err, res) => {
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

const upload = multer({
    dest: "/path/to/temporary/directory/to/store/uploaded/files"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


let router = express.Router();
router.post(
    "upload",
    upload.single("file" /* name attribute of <file> element in your form */),
    (req, res) => {

        let post_id = req.body.post_id;
        let type = 1;
        let data = req.body.text;
        addTab(post_id, type, data);
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, "./uploads/image.png");

        let name = path.extname(req.file.originalname).toLowerCase();
        if (name === ".png" || name === ".jpg" || name === ".jpeg") {
            fs.rename(tempPath, targetPath, err => {
                if (err) return handleError(err, res);

                res
                    .status(200)
                    .contentType("text/plain")
                    .end("File uploaded!");
            });
        } else {
            fs.unlink(tempPath, err => {
                if (err) return handleError(err, res);

                res
                    .status(403)
                    .contentType("text/plain")
                    .end("Only images are allowed!");
            });
        }
    }
);

module.exports = router;
