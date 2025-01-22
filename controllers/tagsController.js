const connection = require("../data/db")

const index = (req, res) => {
    const sql = "SELECT * FROM `tags`";
    connection.query(sql, (err, tags) => {
        if (err) return res.status(500).json({ error: "Internal Server error" });
        res.json({ status: "success", data: tags });
    })
}

module.exports = {index}