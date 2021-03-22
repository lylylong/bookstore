import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <BookList />
    </Provider>
  );
}

export default App;
