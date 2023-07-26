import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import * as workoutService from "../services/workout.service";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    // prevent refreshing page upon hit
    e.preventDefault();

    const workout = { title, load, reps };

    // const response = await fetch("http://localhost:4000/api/workouts", {
    //   method: "POST",
    //   body: JSON.stringify(workout),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const json = await response.json();

    // if (!response.ok) {
    //   setError(json.error);
    //   setEmptyFields(json.emptyFields);
    // }
    // if (response.ok) {
    //   setTitle("");
    //   setLoad("");
    //   setReps("");
    //   setError(null);
    //   setEmptyFields([]);
    //   console.log("new workout added", json);
    //   dispatch({ type: "CREATE_WORKOUT", payload: json });
    // }

    workoutService
      .postWorkout(workout)
      .then(async (response) => {
        let json = await response.json();

        if (!response.ok) {
          setError(json.error);
          setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
          setTitle("");
          setLoad("");
          setReps("");
          setError(null);
          setEmptyFields([]);
          console.log("new workout added", json);
          dispatch({ type: "CREATE_WORKOUT", payload: json });
        }
      })
      .catch((error) => {
        console.log({Error: error});
      });
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Excercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (lb):</label>
      <input
        type="text"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="text"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;