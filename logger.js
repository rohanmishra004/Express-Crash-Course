const logger = (req, res, next) => {
    const date = new Date;
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}\t`,date.toLocaleDateString());
    next()
}

module.exports = logger