import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SingleVehicle = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [SingleVehicle, setSingleVehicle] = useState();
  useEffect(() => {
    const _SingleVehicle = store.vehicles.find(
      (SingleVehicle) => SingleVehicle.uid === id
    );
    setSingleVehicle(_SingleVehicle);
  }, []);
  return (
    <div className="container">
      {SingleVehicle !== undefined ? (
        <>
          <h2 className="display-1">{SingleVehicle?.properties?.name}</h2>
          <ul>
            <li>Model: {SingleVehicle?.properties?.model || "N/A"}</li>
            <li>Manufacturer: {SingleVehicle?.properties?.manufacturer || "N/A"}</li>
            <li>Cost in Credits: {SingleVehicle?.properties?.cost_in_credits || "N/A"}</li>
            <li>Length: {SingleVehicle?.properties?.length || "N/A"}</li>
            <li>Max Atmosphering Speed: {SingleVehicle?.properties?.max_atmosphering_speed || "N/A"}</li>
            <li>Crew: {SingleVehicle?.properties?.crew || "N/A"}</li>
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
