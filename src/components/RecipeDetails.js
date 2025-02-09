import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites } from "../features/recipeSlice";
import "./recipedetails.css"

const RecipeDetails = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id); 
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.recipes);
  console.log("Recipes in state:", recipes);
  console.log("Decoded ID:", decodedId);

  const recipe = recipes.find((r) => r.recipe.uri.includes(decodedId));

  if (!recipe) return <p>Loading recipe details...</p>;

  return (
    <div className="container"  >
       <section className="recipedetails">
      <h3>{recipe.recipe.label}</h3>
      <div className="d-flex">
      <img src={recipe.recipe.image} alt={recipe.recipe.label}  style={{borderRadius:"1rem", marginRight:"2rem"}} width="250" className="detailsimage1" />
      <img src={recipe.recipe.image} alt={recipe.recipe.label}  style={{borderRadius:"1rem"}} width="250" className="detailsimage2" />
      </div>
      <div className="detailsingredients">
      <p><strong>Ingredients:</strong></p>
      <ul >
        {recipe.recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing.text}</li>
        ))}
      </ul>
      </div>
        <div className="detailsingredients">
        <p><strong>Calories:</strong> {Math.round(recipe.recipe.calories)}</p>
        <p><strong>Mealtype:</strong> {recipe.recipe.mealType}</p>
        <p><strong>Servings:</strong> {recipe.recipe.yield}</p>
        </div>
      <p className="detailsingredients"><strong>Mealtype:</strong> {recipe.recipe.healthLabels}</p>
      
      <button className="searchpage-fav" onClick={() => dispatch(addToFavorites(recipe.recipe))}>
        Add to Favorites
      </button>
    </section>
    </div>
   
  );
};

export default RecipeDetails;
