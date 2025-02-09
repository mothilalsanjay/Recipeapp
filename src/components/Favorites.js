import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../features/recipeSlice";
import { Link } from "react-router-dom";
import "./favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

  console.log("Current Favorites:", favorites); // Debugging

  if (!favorites || favorites.length === 0) {
    return (
      <div className="text-center" >
        <h2 >Favorite Recipes</h2>
        <p>No favorites added yet.</p>;
      </div>
    )
  }

  return (
    <div className="text-center">
       <h2>Favorite Recipes</h2>
      <div className="container">
      <div className="favorites-grid">
        {favorites.map((recipe) => {
          if (!recipe || !recipe.recipe) return null;

          const recipeId = recipe.recipe.uri.split("#")[1];

          return (
            <div className="card-fav" key={recipeId}>
              <h6 className="text-primary">{recipe.recipe.label}</h6>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} className="card-img" />
              <button
                onClick={() => {
                  dispatch(removeFromFavorites(recipe));
                  console.log("Removing from favorites:", recipe);
                }}
              >
                Remove from Favorites
              </button>
              <Link to={`/recipe/${encodeURIComponent(recipeId)}`}>
                <button className="searchpage-details">View Details</button>
              </Link>
            </div>
          );
        })}
         </div>
      </div>
    </div>
     
   
  );
};

export default Favorites;
