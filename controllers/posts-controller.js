// IMPORTED DATA
const posts = require("../data/db");
const connection = require("../data/db")

// CONTROLLERS
// Index
const index = (req, res) => {
    const sql = "SELECT * FROM posts";
    connection.query(sql, (err, posts) => {
        if(err) return res.status(500).json({error: "Internal Server error"});
        res.json({status: "success", data: posts});
    })
}

// Show
const show = (req, res) => {
    
}


// Destroy
const destroy = (req, res) => {

}
    

// EXPORT
module.exports = {
    index,
    show,
    destroy
}