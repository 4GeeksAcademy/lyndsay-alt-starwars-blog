import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  function fetchItems(nature) {
    fetch(`${store.BASE_API_URL}/${nature}?expanded=true&limit=100&page=1`)
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
                    key={people.uid}
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
                      <h5 className="card-title">{people.properties.name}</h5>
                      <p className="card-text">
                        gender: {people.properties.gender}
                      </p>
                      <p className="card-text">
                        hair color: {people.properties.hair_color}
                      </p>
                      <p className="card-text">
                        eye color: {people.properties.eye_color}
                      </p>
                      <div className="d-flex justify-content-between">
                        <Link
                          to={`/people/${people.uid}`}
                          className="btn btn-primary"
                        >
                          Learn More
                          <button
                            className="btn btn-outline-warning"
                            onClick={(event) =>
                              dispatch({
                                type: "toggle_favorite",
                                payload: { id: people.id, name: people.name, nature: "people" },
                              })
                            }
                          >
                            ❤️
                          </button>
                        </Link>
                      </div>
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
                    key={planet.uid}
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
                      <h5 className="card-title">{planet.properties.name}</h5>
                      <p className="card-text">
                        population: {planet.properties.population}
                      </p>
                      <p className="card-text">
                        terrain: {planet.properties.terrain}
                      </p>
                      <Link
                        to={`/planets/${planet.uid}`}
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
                    key={vehicle.uid}
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
                      <h5 className="card-title">{vehicle.properties.name}</h5>
                      <p className="card-text">
                        crew: {vehicle.properties.crew}
                      </p>
                      <p className="card-text">
                        vehicle_class: {vehicle.properties.vehicle_class}
                      </p>
                      <p className="card-text">
                        model: {vehicle.properties.model}
                      </p>
                      <Link
                        to={`/vehicles/${vehicle.uid}`}
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
