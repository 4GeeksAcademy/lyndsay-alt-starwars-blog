import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  function fetchItems(nature) {
    fetch(`${store.BASE_API_URL}/${nature}`)
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
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column w-100">
          <h2>people</h2>
          <div className="d-flex flex-nowrap items-container">
            {store.people.map((people) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>
                    <p className="card-text">status: {people.status}</p>
                    <p className="card-text">species: {people.species}</p>
                    <p className="card-text">gender: {people.gender}</p>
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
            {/* {store.people.map((people) => {
            return <ItemCard Item={people} nature="people" />;
          })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
