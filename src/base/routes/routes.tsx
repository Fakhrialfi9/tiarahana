import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/layout.jsx";
import HomeView from "../../ui/views/home.jsx";

const routes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomeView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default routes;
