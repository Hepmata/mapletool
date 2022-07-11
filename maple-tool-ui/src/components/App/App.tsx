import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../../utility/constants";
import NavigationTopBar from "../NavigationTopBar/NavigationTopBar";
import Footer from "../Footer/Footer";
import { Container } from "@nextui-org/react";
function App() {
  function renderRoutes() {
    return Object.entries(ROUTES).map((item, id) => {
      return <Route key={id} path={item[1].path} element={item[1].element} />;
    });
  }

  useEffect(() => {}, []);
  return (
    <Container direction="column" display="flex">
      <NavigationTopBar />
      <Routes>{renderRoutes()}</Routes>;
      <div className="bottom">
        <Footer />
      </div>
    </Container>
  );
}

export default App;
