import React from "react";
import SearchRepo from "./pages/SearchRepo";
import { Routes, Route } from "react-router-dom";
import RepoDetails from "./pages/RepoDetails";

function App() {

  return (
    <Routes>
      <Route path="/" element={<SearchRepo />} />
      <Route path="/repo-details/:id" element={<RepoDetails />} />
    </Routes>
    
  );
}

export default App;
