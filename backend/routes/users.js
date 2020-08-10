const router = require('express').Router();
let User = require('../models/user.model');
const cors = require('cors')

router.use(cors())

process.env.SECRET_KEY = 'secret';

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


//signup 
router.route('/add').post((req, res) => {
    const email = req.body.email
    const username = req.body.username;
    const password = req.body.password;

  const newUser = new User({username, email, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;