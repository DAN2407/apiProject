const { Router } = require("express");
const router = Router();

//routes
router.get('/test', (req, res) => {
    const data = {
        "name": "DannCaster",
        "age": "24",
        "hobbies": ["gaming", "music", "movies"]
    }
    res.json(data);
});

module.exports = router;