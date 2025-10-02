export const initialStore = () => {
  return {
    people: [
      "https://www.swapi.tech/api/people"
    ],
    planets: ["https://www.swapi.tech/api/planets"],
    vehicles: ["https://www.swapi.tech/api/vehicles"],
    favorites: [],
    BASE_API_URL: "https://www.swapi.tech/api",
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_items": {
      const nature = action.payload.nature;
      const items = action.payload.items;
      const newStore = { ...store };
      if (nature === "people") {
        newStore.people = items;
      } else if (nature === "planets") {
        newStore.planets = items;
      } else if (nature === "vehicles") {
        newStore.vehicles = items;
      }
      return newStore;
    }
    // case "add_task":
    //   const { id, color } = action.payload;

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) =>
    //       todo.id === id ? { ...todo, background: color } : todo
    //     ),
    //   };
    default:
      throw Error("Unknown action.");
  }
  return store;
}
