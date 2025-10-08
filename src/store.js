export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
    BASE_API_URL: "https://www.swapi.tech/api",
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "toggle_favorite":
      const favortiteItem = store.favorites.find(
        (favorite) => favorite.id == action.payload.id && favorite.nature === action.payload.nature );
        if (!favoriteItem) {
          return {
            ...store,
            favorites: [...store.favorites, action.payload],
          };
        }
        return {
          ...store,
          favorites: store.favorites.filter(
            (favorite) => favorite.id != action.payload.id || favorite.nature !== action.payload.nature
          ),
        };
    case "set_items": 
      const nature = action.payload.nature;
      const items = action.payload.items;
      const newStore = {...store};
      if (nature === "people") { newStore.people = items; }
      if (nature === "planets") { newStore.planets = items; }
      if (nature === "vehicles") { newStore.vehicles = items; }
      return newStore;
    default:
      throw Error("Unknown action.");
  }
  return store;
}
