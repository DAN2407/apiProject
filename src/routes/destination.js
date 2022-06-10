const {Router} = require('express');
const router = Router();

//get
router.get('/', (req, res) => {
    res.send('get destination');
}
);
//post
router.post('/', (req, res) => {
    res.send('post destination');
}
);
//put
router.put('/', (req, res) => {
    res.send('put destination');
}
);
//delete
router.delete('/', (req, res) => {
    res.send('delete destination');
}
);



module.exports = router;