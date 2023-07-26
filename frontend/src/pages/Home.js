import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import * as workoutService from "../services/workout.service";

const Home = () => {
  //const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    workoutService
      .getWorkouts()
      .then(async (response) => {
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      })
      .catch((error) => {
        console.log({ Error: error });
      });
  }, [dispatch]);

  return (
    <div className="home">
    
      <div className="workouts">
        <div>
        </div>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />

      
    </div>
  );
};

export default Home;
