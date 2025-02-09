import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";
import RecipeDetails from "./components/RecipeDetails";
import SearchPage from "./pages/SearchPage"; 

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/recipelist" element={<RecipeList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default Main;
