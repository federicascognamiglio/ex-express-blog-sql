const checkPostExists = (req, res, next) => {
    next()
    // const findId = posts.find(curPost => curPost.id === parseInt(req.params.id));
    // if (findId === undefined) {
    //     res.status(404);
    //     res.json({
    //         error: true,
    //         message: "Post not Found"
    //     })
    // } else {
    //     next();
    // }
}

module.exports = checkPostExists;