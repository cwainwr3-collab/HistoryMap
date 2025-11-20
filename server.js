//RUN THIS TO START PROGRAM
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20013736",
  database: "richlist",
  port: 3306
});

db.connect(err => {
  if (err) console.error("DB error:", err);
  else console.log("Connected to DB");
});

app.get("/api/billionaires/:country", (req, res) => {
  const country = req.params.country;

  const sql = "SELECT * FROM billionaires WHERE country = ?";
  db.query(sql, [country], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
