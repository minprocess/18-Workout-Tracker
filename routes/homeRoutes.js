/*
const router = require("express").Router();
const Workouts = require("../workout.js");

router.get('/', async (req, res) => {
try {
  // Get all projects and JOIN with user data
  const workouts = await Workout.find({});
  const workouts = await Workouts.findAll({});

  // Serialize data so the template can read it
  //const articles = articleData.map((article) => article.get({ plain: true }));

  // Pass serialized data and session flag into template
  res.json(workouts);
} catch (err) {
  res.status(500).json(err);
}
});
*/

const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
