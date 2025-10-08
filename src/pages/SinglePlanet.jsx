import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SinglePlanet = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [SinglePlanet, setSinglePlanet] = useState();
  useEffect(() => {
    const _SinglePlanet = store.planets.find(
      (SinglePlanet) => SinglePlanet.uid === id
    );
    setSinglePlanet(_SinglePlanet);
  }, []);
  return (
    <div className="container">
      {SinglePlanet !== undefined ? (
        <>
          <h2 className="display-1">{SinglePlanet?.properties?.name}</h2>
          <ul>
            <li>Climate: {SinglePlanet?.properties?.climate || "N/A"}</li>
            <li>Diameter: {SinglePlanet?.properties?.diameter || "N/A"}</li>
            <li>Population: {SinglePlanet?.properties?.population || "N/A"}</li>
            <li>Orbital Period: {SinglePlanet?.properties?.orbital_period || "N/A"}</li>
            <li>Rotation Period: {SinglePlanet?.properties?.rotation_period || "N/A"}</li>
            <li>Surface Water: {SinglePlanet?.properties?.surface_water || "N/A"}</li>
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}      
    </div>
  );
};
