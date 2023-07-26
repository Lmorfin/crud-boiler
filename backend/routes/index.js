const router = require("express").Router();
const workoutRoutes = require("./workouts.routes");


router.use("/api/workouts", workoutRoutes);


module.exports = router;

