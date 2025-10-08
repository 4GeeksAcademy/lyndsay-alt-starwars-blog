import { Link } from "react-router-dom";

import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"></span>
          <img src="/img/sw_logo.svg" style={{ height: "80px" }} />
        </Link>
        <div className="ml-auto">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites{" "}
              <span className="badge bg-secondary">
                {store.favorites.length}
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.favorites.map((favorite) => {
                return (
                  <li
                    key={`${favorite.nature}-${favorite.id}`}
                    className="dropdown-item d-flex justify-content-between"
                  >
                    {favorite.name}
                    <span
                      onClick={() =>
                        dispatch({
                          type: "toggle_favorite",
                          payload: {
                            id: favorite.id,
                            name: favorite.name,
                          nature: favorite.nature,
                        },
                      })
                    }>
                      <i className="fa-solid fa-trash"></i>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
