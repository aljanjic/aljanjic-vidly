import React from "react";
import Movies from "./components/movies";

import "./App.css";
import NavBar from "./components/navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/register";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <main className="container content">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/movies/:id" element={<MovieForm />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
