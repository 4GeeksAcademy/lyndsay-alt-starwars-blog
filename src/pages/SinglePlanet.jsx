import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const SinglePlanet = (props) => {
  const { store } = useGlobalReducer();
  const { id } = useParams();
  const [SinglePlanet, setSinglePlanet] = useState();
  useEffect(() => {
    const _SinglePlanet = store.planets.find(
      (SinglePlanet) => SinglePlanet.uid === id
    );
    setSinglePlanet(_SinglePlanet);
  }, []);
  return (
    <div>
      {SinglePlanet !== undefined ? (
        <div className="container">
          <div className="card my-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-md-4">
                <img
                  src={`/img/planets/${SinglePlanet?.uid}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    {SinglePlanet?.properties?.name}
                  </h1>
                  <hr></hr>
                  <p className="card-text">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus provident perferendis deserunt. Laborum quam neque quas amet saepe accusantium? Id dolorem ad saepe temporibus rerum doloribus exercitationem labore quidem expedita!
                  </p>
                  
                </div>
              </div>
            </div>
            
            <hr></hr>
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Climate:</strong> <i>{SinglePlanet?.properties?.climate || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Diameter:</strong> <i>{SinglePlanet?.properties?.diameter || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Population:</strong> <i>{SinglePlanet?.properties?.population || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Orbital Period:</strong> <i>{SinglePlanet?.properties?.orbital_period || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Rotation Period:</strong> <i>{SinglePlanet?.properties?.rotation_period || "N/A"}</i>
              </li>
              <li className="list-inline-item">
                <strong>Surface Water:</strong> <i>{SinglePlanet?.properties?.surface_water || "N/A"}</i>
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
