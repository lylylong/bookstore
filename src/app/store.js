import { createStore } from "redux";

const initialState = {
  data: ["Harry Potter (example)", "one", "two", "three"],
};

function books(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        data: [...state.data, action.book],
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        data: action.books,
      };
    default:
      return state;
  }
}

const store = createStore(books);

export default store;
