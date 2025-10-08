import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SinglePerson = (props) => {
  const { store } = useGlobalReducer();
  const { id } = useParams();
  const [SinglePerson, setSinglePerson] = useState();
  useEffect(() => {
    const _SinglePerson = store.people.find(
      (SinglePerson) => SinglePerson.uid === id
    );
    setSinglePerson(_SinglePerson);
  }, []);
  return (
    <div>
      {SinglePerson !== undefined ? (
        <div className="container">
          <div className="card my-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-md-4">
                <img
                  src={`/img/people/${SinglePerson?.uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {SinglePerson?.properties?.name}
                  </h1>
                  <hr></hr>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error doloremque voluptas voluptatum, veritatis recusandae tenetur vitae doloribus laudantium facilis fugit? Fuga iure consequuntur iste expedita illo labore. Est, quasi rerum!
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Hair Color:</strong>{" "}
                <i>{SinglePerson?.properties?.hair_color || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Skin Color:</strong>{" "}
                <i>{SinglePerson?.properties?.skin_color || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Eye Color:</strong>{" "}
                <i>{SinglePerson?.properties?.eye_color || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Mass:</strong>{" "}
                <i>{SinglePerson?.properties?.mass || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Height:</strong>{" "}
                <i>{SinglePerson?.properties?.height || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Birth Year:</strong>{" "}
                <i>{SinglePerson?.properties?.birth_year || "N/A"}</i>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
