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
    const tagsSql = `
    SELECT tags.* 
    FROM tags 
    JOIN post_tag 
    ON tags.id = post_tag.tag_id
    JOIN posts
    ON post_tag.post_id = posts.id
    WHERE posts.id = ?
    `

    connection.query(sql, [id], (err, posts) => {
        if (err) {
            return res.status(500).json({ error: "Internal Server error" });
        } else if (posts.length === 0) {
            return res.status(404).json({ error: "Post not found" })
        } else {
            connection.query(tagsSql, [id], (err, tags) => {
                if (err) return res.status(500).json({ error: "Internal Server error" });
                const postDetails = {
                    ...posts[0],
                    tags
                }
                return res.json({ status: "success", data: postDetails });
            })
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