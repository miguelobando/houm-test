import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
