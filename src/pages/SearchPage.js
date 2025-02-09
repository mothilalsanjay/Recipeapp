import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

import "./searchpage.css"

const SearchPage = () => {
  const recipes = useSelector((state) => state.recipes.recipes); // Fetch from Redux

  console.log("Recipes from Redux:", recipes); // Debugging

  return (
    <div>
      <div className="searchpage">
         <h3 className="text-light" >Search for Recipes</h3>
      </div>
      <SearchBar />
      <RecipeList recipes={recipes} /> {/* Pass recipes as a prop */}
    </div>
  );
};

export default SearchPage;
