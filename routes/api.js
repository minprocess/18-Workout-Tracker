
const router = require("express").Router();
const Workout = require("../models/workout");

// total duration of all workouts
router.get("/api/workouts", (req, res) => {
  console.log("/api/workouts");
  Workout.aggregate([
    {
      $addFields: { 
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    }
  ])
//    .sort({ date: -1 })
    .then(dbWorkout => {
      console.log("/api/workouts .then");
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// TODO
// 2nd .get for last 7 workouts aggregate
// "/api/workouts/range"
router.get("/api/workouts/range", (req, res) => {
  console.log("/api/workouts/range")
  Workout.aggregate([
    {
      $addFields: { 
        totalDuration: {
          $sum: "$exercises.duration"
        }
      }
    }
  ])
//    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body }},
    { new: true, runValidators: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// TODO
// Write .delete route here

module.exports = router;
