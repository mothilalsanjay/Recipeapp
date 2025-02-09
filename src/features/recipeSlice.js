import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch recipes asynchronously
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async ({ query, healthLabel, cuisineType, mealType, dishType }) => {
    console.log("Fetching recipes with:", {
      query,
      healthLabel,
      cuisineType,
      mealType,
      dishType,
    });

    const url = new URL("https://api.edamam.com/api/recipes/v2");
    url.searchParams.append("type", "public");
    url.searchParams.append("q", query);
    url.searchParams.append("app_id", "0e3ed6e9");
    url.searchParams.append("app_key", "f0f44194e662527d92b6fd8d51609afe");

    if (healthLabel) url.searchParams.append("health", healthLabel);
    if (cuisineType) url.searchParams.append("cuisineType", cuisineType);
    if (mealType) url.searchParams.append("mealType", mealType);
    if (dishType) url.searchParams.append("dishType", dishType);

    console.log("Final API URL:", url.toString());

    try {
      const response = await fetch(url, { method: "GET",
        headers: {
          "Edamam-Account-User": "ACCOUNT_USER", // Replace with actual value
        }, });

      console.log("API Response Status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data.hits);

      return data.hits;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const recipe = action.payload;
        // Check if the recipe object is valid
  if (!recipe || !recipe.recipe || !recipe.recipe.uri) {
    console.error("Invalid recipe structure:", recipe);
    return;
  }
      const exists = state.favorites.some((r) => r.recipe.uri === recipe.recipe.uri);
      
      if (!exists) {
        state.favorites.push(recipe);
        console.log("Added to favorites:", recipe);
      } else {
        console.log("Recipe already in favorites:", recipe);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (recipe) => recipe.recipe.uri !== action.payload.recipe.uri
      );
      console.log("Removed from favorites:", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        console.log("Fetching recipes: Pending...");
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        console.log("Fetching recipes: Success!");
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        console.error("Fetching recipes: Failed", action.error.message);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer;
