import { createStore } from "redux";

const initialState = {
  data: ["Harry Potter (example)"],
};

// const initialState = [
//   { title: "Harry Potter", price: 20, category: "action", description: "hahahah" },
//   { title: "Dark Disciple", price: 20, category: "action", description: "hahahah" },
//   { title: "The Martian", price: 20, category: "action", description: "hahahah" },
// ];

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
