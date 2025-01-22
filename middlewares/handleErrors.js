const errorHandler = (err, req, res, next) => {
    res.statusCode = (500);
    res.json({
        error: true,
        message: "Internal Server Error"
    })
}

module.exports = errorHandler;