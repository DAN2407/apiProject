const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const destinations = require('../exaDest.json');

//get
router.get('/', (req, res) => {
    res.send(destinations);
}
);
//post
router.post('/', (req, res) => {
    const { id, name, description, ubication, image, rating } = req.body;
    if(id && name && description && ubication && image && rating) {
        const id = destinations.length + 1;
        const newDestination = {...req.body, id};
        console.log(newDestination);
        destinations.push(newDestination);
        res.json(destinations);
    }else{
    res.json({error: 'There was an error'});
    }

}
);
//put
router.put('/', (req, res) => {
    const { id } = req.params;
    const { name , description , ubication , image, rating } = req.body;
    if(id && name && description && ubication && image && rating){
        _.each(destinations, (destination, index) => {
            if(destination.id == id){
                destination.name = name;
                destination.description = description;
                destination.ubication = ubication;
                destination.image = image;
                destination.rating = rating;
            }
        });
        res.json(destinations);
    }
}
);
//delete
router.delete('/', (req, res) => {
    const { id } = req.params;
    _.each(destinations, (destination, index) => {
        if(destination.id == req.params.id) {
            destinations.splice(index, 1);
        }
    }
    );
    res.send(destinations);
}
);



module.exports = router;