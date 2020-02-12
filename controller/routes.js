const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

router.get('/add', (req, res) => {
    const body = req.body
    console.log('body:', body)
    res.json(body.a + body.b)
})

module.exports = router