// IMPORTED DATA
const posts = require("../data/db");
const connection = require("../data/db")

// CONTROLLERS
// Index
const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";
    connection.query(sql, (err, posts) => {
        if (err) return res.status(500).json({ error: "Internal Server error" });
        res.json({ status: "success", data: posts });
    })
}

// Show
const show = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `posts` WHERE id = ?";
    connection.query(sql, [id], (err, posts) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server error" });
        } else if (posts.lenght === 0) {
            return res.status(404).json({ error: "Post not found" })
        } else {
            res.json({ status: "success", data: posts[0] });
        }
    })
}

// Destroy
const destroy = (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM `posts` WHERE id = ?";
    connection.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server error" });
        } else {
            return res.sendStatus(204);
        }
    })
}

// EXPORT
module.exports = {
    index,
    show,
    destroy
}