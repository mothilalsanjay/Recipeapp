import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../features/recipeSlice";
import { Link } from "react-router-dom";
import "./recipelist.css"; // Ensure this file exists

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="grid-container">
      {recipes.map((recipe, index) => {
        if (!recipe || !recipe.recipe) return null;
        const recipeId = recipe.recipe.uri.split("#")[1];

        return (
          <div className="card" key={recipeId}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img" />
            <h6 className="text-primary">{recipe.recipe.label}</h6>
            <button className="searchpage-fav" onClick={() => dispatch(addToFavorites(recipe))}>
              Add to Favorites
            </button>
            <Link to={`/recipe/${encodeURIComponent(recipeId)}`}>
              <button className="searchpage-details">View Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
