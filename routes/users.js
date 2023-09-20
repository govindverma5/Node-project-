const router = require('express').Router();
const registerController = require('../controllers/registercontroller');
const middelware = require('../middelware/auth.js');

const usersData = {
    1: {id:1, firstName: 'Govind', lastName: 'Verma'},
    2: {id:2, firstName: 'Test', lastName: 'test'},
    3: {id:3, firstName: 'Koko', lastName: 'Kennedy'}
}

router.route('/users')
// to create new resources
.post(function(req, res, next) {    
    // res.send('fds');
    res.json(req.body).status(200).send();
})

// to retrieve resource
// .get(function(req, res, next) {
//     res.json(usersData);
//     res.status(200).send();
// })

router.get('/users', middelware, (req, res) => {
    res.json(usersData);
});


router.route('/users/:userId')
// to retrieve a single resource
.get(function(req, res, next) {
    const id = req.params.userId;

    if(id && usersData[id]) {
        res.json(usersData[id]);
        res.status(200).send();
    } else  {
        // Not Found
        res.status(404).send();
    }
})

// Create a new item
router.post('/register', registerController.register);



module.exports = router;