const jwt = require('jsonwebtoken')

const fetchuser = (req, res, next) => {
    const token = req.header('token')
    if (!token) {
        res.status(401).send({ "error": "please authenticate using a validate token" })
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.user
        next()
    }
    catch (error) {
        res.status(401).send({ "error": "please authenticate using a validate token" })

    }
}

module.exports = fetchuser