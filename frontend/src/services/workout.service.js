import * as env from "../config/env";

const headers = { "Content-Type": "application/json" };
const baseUrl = `${env.url}/api/workouts`;

export const postWorkout = async (workout) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(workout),
    headers,
  });
  return response;
};

export const deleteWorkout = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return response;
};

export const getWorkouts = async () => {
  const response = await fetch(baseUrl, {
    method: "GET",
  });
  return response;
};
