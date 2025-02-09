import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../features/recipeSlice";
import "./searchbar.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("");
  const [caution, setCaution] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [mealType, setMealType] = useState("");
  const [dishType, setDishType] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { query, healthLabel, cuisineType, mealType });
    dispatch(fetchRecipes({ query, healthLabel, caution, cuisineType, mealType, dishType }));
  };

  const handleCategoryClick = (type) => {
    setMealType(type);
    setQuery(""); // Clear search input
    dispatch(fetchRecipes({ query: "", mealType: type }));
  };

  const handleCategoryClick1 = (type) => {
    setCuisineType(type);
    setQuery(""); // Clear search input
    dispatch(fetchRecipes({ query: "", cuisineType: type }));
  };

  return (
    <div className="searchbar" >
      <form onSubmit={handleSearch}>
        <div >
          <section className="search-section" >
          <input className="search-section-input" type="text" value={query} onChange={(e) => setQuery(e.target.value)}placeholder="Search recipes..."/>
        <button type="submit" className="search-section-button">Search</button>
        <Link to="/favorites">
        <button className="searchpage-button">Favorites</button>
      </Link>
        </section> 
       
             {/* Buttons for Quick Meal Type Filtering */}
             <section className="searchsection2">
          <h3>Popular Categories</h3>
          <div className="categories">
          <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick("breakfast")}> 🥞 Breakfast</button>
        <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick("lunch")}> 🍛Lunch</button>
        <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick("dinner")}> 🍽️Dinner</button>
        <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick1("indian")}> 🍢 Indian</button>
        <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick1("italian")}> 🍕 Italian</button>
        <button type="button" className="btn-search" data-bs-toggle="button" onClick={() => handleCategoryClick1("chinese")}> 🥡Chinese</button>
          </div>
        </section>
        </div>
      <div className="searchselect">
      <select className="searchoption" onChange={(e) => setHealthLabel(e.target.value)}>
          <option value="">Health Labels</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="low-carb">Low Carb</option>
        </select>
        <select className="searchoption" onChange={(e) => setCaution(e.target.value)}>
          <option value="">Cautions</option>
          <option value="sulfites">Sulfites</option>
          <option value="peanut">Peanuts</option>
        </select>
        <select className="searchoption" onChange={(e) => setCuisineType(e.target.value)}>
          <option value="">Cuisine Type</option>
          <option value="indian">Indian</option>
          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
        </select>
        <select className="searchoption" onChange={(e) => setMealType(e.target.value)}>
          <option value="">Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <select className="searchoption" onChange={(e) => setDishType(e.target.value)}>
          <option value="">Dish Type</option>
          <option value="main course">Main Course</option>
          <option value="dessert">Dessert</option>
          <option value="soup">Soup</option>
        </select>
      </div>
      </form>
    </div>
  );
};

export default SearchBar;
