const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for exercise type"
  },
  name: {
    type: String,
    trim: true;
    required: "Enter a name this exercise"
  },
  duration: {
    type: Integer,
    required: "Enter duration of exercise in minutes"
  },
  weight: {
    type: Integer,
    required: "Enter weight in pounds"
  },
  reps: {
    type: Integer,
    required: "Enter number of reps"
  },
  sets: {
    type: Integer,
    required: "Enter number of sets"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
