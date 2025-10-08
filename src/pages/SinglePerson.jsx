import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SinglePerson = (props) => {
  const { store, dispatch } = useGlobalReducer();
  const { id } = useParams();
  const [SinglePerson, setSinglePerson] = useState();
  useEffect(() => {
    const _SinglePerson = store.people.find(
      (SinglePerson) => SinglePerson.uid === id
    );
    setSinglePerson(_SinglePerson);
  }, []);
  return (
    <div className="container">
      {SinglePerson !== undefined ? (
        <>
          <h2 className="display-1">{SinglePerson?.properties?.name}</h2>
          <ul>
            <li>Hair Color: {SinglePerson?.properties?.hair_color || "N/A"}</li>
            <li>Skin Color: {SinglePerson?.properties?.skin_color || "N/A"}</li>
            <li>Eye Color: {SinglePerson?.properties?.eye_color || "N/A"}</li>
            <li>Mass: {SinglePerson?.properties?.mass || "N/A"}</li>
            <li>Height: {SinglePerson?.properties?.height || "N/A"}</li>
            <li>Birth Year: {SinglePerson?.properties?.birth_year || "N/A"}</li>
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
