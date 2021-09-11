const express =  require('express');
const router = express.Router();

const Admin = require('../../models/Admin');

router.post('/email', (req, res) => {
    Admin.find({email: req.body.email})
        .then(admin => {
            res.json(admin.length > 0)
        });
});

router.post('/', (req, res) => {
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email
    });
    admin.save().then(admins => res.json(admins))
});

module.exports = router;