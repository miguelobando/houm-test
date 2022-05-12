import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
// import { Provider } froms "react-redux";
// import { store } from "./app/store";
import { LaunchDetails } from "./views/LaunchDetails";
function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch/:launchId" element={<LaunchDetails />} />
      </Routes>
      {/* </Provider> */}
    </>
  );
}

export default App;
