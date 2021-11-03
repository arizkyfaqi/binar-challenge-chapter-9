const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// Create PROFILE

app.post("/profile", async (req, res) => {
  try {
    const { name, email, level, experience } = req.body;
    const newProfile = await pool.query(
      "INSERT INTO profile ( name, email, level, experience ) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, level, experience]
    );
    res.json(newProfile.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// GET ALL PROFILE

app.get("/profile", async (req, res) => {
  try {
    const allProfile = await pool.query("SELECT * FROM profile");
    res.json(allProfile.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// GET A PROFILE
app.get("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await pool.query("SELECT * FROM profile WHERE id = $1", [
      id,
    ]);
    res.json(profile.rows[0]);
    console.log(req.params);
  } catch (err) {
    console.error(err.message);
  }
});
// UPDATE PROFILE

app.put("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updateProfile = await pool.query(
      "UPDATE profile SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );
    res.json("Profile was update");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete Profile

app.delete("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProfile = await pool.query(
      "DELETE FROM profile WHERE id = $1",
      [id]
    );
    res.json("Profile was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
