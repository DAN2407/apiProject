const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const users = require('../example.json');

//get
router.get('/', (req, res) => {
    res.json(users);
}
);

//post
router.post('/', (req, res) => {
    const { id, name, nickname, email, password } = req.body;
    if(id && name && nickname && email && password) {
        const id = users.length + 1;
        const newUser = {...req.body, id};
        console.log(newUser);
        users.push(newUser);
        res.json(users);
    }else{
    res.json({error: 'There was an error'});
    }
});


//delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(users, (user, index) => {
        if(user.id == req.params.id) {
            users.splice(index, 1);
        }
    }
    );
    res.send(users);
}
);

//put
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, nickname , email , password } = req.body;
    if(id && nickname && email && password){
        _.each(users, (user, index) => {
            if(user.id == id){
                user.name = name;
                user.nickname = nickname;
                user.email = email;
                user.password = password;
            }
        });
        res.json(users);
    }else{
        res.json({error: 'There was an error'});
    }
});

module.exports = router;