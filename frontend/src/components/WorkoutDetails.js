import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import * as workoutService from "../services/workout.service";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    workoutService
      .deleteWorkout(workout._id)
      .then(async (response) => {
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "DELETE_WORKOUT", payload: json });
        }
      })
      .catch((error) => {
        console.log({ Error: error });
      });

    // const response = await fetch(
    //   "http://localhost:4000/api/workouts/" + workout._id,
    //   {
    //     method: "DELETE",
    //   }
    // );
    // const json = await response.json();

    // if (response.ok) {
    //   dispatch({ type: "DELETE_WORKOUT", payload: json });
    // }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (lb):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
