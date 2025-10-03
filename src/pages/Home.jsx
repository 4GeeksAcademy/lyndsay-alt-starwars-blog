import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  function fetchItems(nature) {
    fetch(`${store.BASE_API_URL}/${nature}?page=1&limit=100`)
      .then((response) => response.json())
      .then((body) => {
        dispatch({
          type: "set_items",
          payload: {
            nature: nature,
            items: body.results,
          },
        });
      });
  }
 

  useEffect(() => {
    fetchItems("people");
    fetchItems("planets");
    fetchItems("vehicles");
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column w-100">
            <h2>People</h2>
            <div className="d-flex flex-nowrap items-container">
              {store.people.map((people) => {
                return (
                  <div
                    className="card"
                    style={{ minWidth: "18rem", margin: "0 .5rem" }}
                  >
                    <img
                      src={`/img/people/${people.uid}.jpg`}
                      onError={(e) =>
                        (e.currentTarget.src = "https://place-hold.it/300x200")
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{people.name}</h5>
                      <p className="card-text">
                        gender: {people.gender}
                      </p>
                      <p className="card-text">
                        species: {people.species}
                      </p>
                      <p className="card-text">
                        birth year: {people.birth_year}
                      </p>
                      <Link
                        to={`/people/${people.id}`}
                        className="btn btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex flex-column w-100">
            <h2>Planets</h2>
            <div className="d-flex flex-nowrap items-container">
              {store.planets.map((planet) => {
                return (
                  <div
                    className="card"
                    style={{ minWidth: "18rem", margin: "0 .5rem" }}
                  >
                    <img
                      src={`/img/planets/${planet.uid}.jpg`}
                      onError={(e) =>
                        (e.currentTarget.src = "https://place-hold.it/300x200")
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{planet.name}</h5>
                      <p className="card-text">
                        population: {planet.population}
                      </p>
                      <p className="card-text">climate: {planet.climate}</p>
                      <p className="card-text">terrain: {planet.terrain}</p>
                      <Link
                        to={`/planets/${planet.id}`}
                        className="btn btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="d-flex flex-column w-100">
            <h2>Vehicles</h2>
            <div className="d-flex flex-nowrap items-container">
              {store.vehicles.map((vehicle) => {
                return (
                  <div
                    className="card"
                    style={{ minWidth: "18rem", margin: "0 .5rem" }}
                  >
                    <img
                      src={`/img/vehicles/${vehicle.uid}.jpg`}
                      onError={(e) =>
                        (e.currentTarget.src = "https://place-hold.it/300x200")
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{vehicle.name}</h5>
                      <p className="card-text">crew: {vehicle.crew}</p>
                      <p className="card-text">
                        vehicle_class: {vehicle.vehicle_class}
                      </p>
                      <p className="card-text">model: {vehicle.model}</p>
                      <Link
                        to={`/vehicles/${vehicle.id}`}
                        className="btn btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
