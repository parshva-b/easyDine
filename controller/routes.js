const router = require('express').Router()

var sess

router.get('/', (req, res) => {
    if(sess) res.json({
        message: `Hello ${sess.email}`
    })
    else res.json({
        message: 'Hello World'
    })
})

router.post('/login', (req, res) => {
    const body = req.body
    sess = req.session
    // check in DB, take password if not throw error

    sess.email = body.email
    // sess.id = mongodbfetch
    res.json(sess)
})

router.get('/resturant', (req, res) => {
    // get all resturants from mongoDB
    // res.json()
})

module.exports = router