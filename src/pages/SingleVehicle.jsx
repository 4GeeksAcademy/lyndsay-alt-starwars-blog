import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SingleVehicle = (props) => {
  const { store } = useGlobalReducer();
  const { id } = useParams();
  const [SingleVehicle, setSingleVehicle] = useState();
  useEffect(() => {
    const _SingleVehicle = store.vehicles.find(
      (SingleVehicle) => SingleVehicle.uid === id
    );
    setSingleVehicle(_SingleVehicle);
  }, []);
  return (
    <div>
      {SingleVehicle !== undefined ? (
        <div className="container">
          <div className="card my-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-md-4">
                <img
                  src={`/img/vehicles/${SingleVehicle?.uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {SingleVehicle?.properties?.name}
                  </h1>
                  <hr></hr>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa molestiae optio molestias. Expedita inventore eum, sunt ea illo voluptates error quia vero nulla itaque sequi libero deleniti quaerat consectetur.
                  </p>
                </div>
              </div>
            </div>

            <hr></hr>
            <ul className="list-inline ">
              <li className="list-inline-item ">
                <strong>Model:</strong>{" "}
                <i>{SingleVehicle?.properties?.model || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Manufacturer:</strong>{" "}
                <i>{SingleVehicle?.properties?.manufacturer || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Cost in Credits:</strong>{" "}
                <i>{SingleVehicle?.properties?.cost_in_credits || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Length:</strong>{" "}
                <i>{SingleVehicle?.properties?.length || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Max Atmosphering Speed:</strong>{" "}
                <i>
                  {SingleVehicle?.properties?.max_atmosphering_speed || "N/A"}
                </i>
              </li>
              <li className="list-inline-item">
                <strong>Crew:</strong>{" "}
                <i>{SingleVehicle?.properties?.crew || "N/A"}</i>
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
