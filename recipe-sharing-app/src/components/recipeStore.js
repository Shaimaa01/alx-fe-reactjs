import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  searchTerm: "",

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          recipe.description
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase()) // Include description search if needed
      ),
    })),

    favorites: [],

    addFavorite: (recipeId) => set(state => ({
      favorites: [...state.favorites, recipeId],
    })),

    removeFavorite: (recipeId) => set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),

    recommendations: [],

    generateRecommendations: () => set(state => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) 
      );
      return { recommendations: recommended };
    }),

}));

export default useRecipeStore;
