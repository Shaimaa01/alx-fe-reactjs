import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => addFavorite(recipe.id)}>
            Add to Favorites
          </button>
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from Favorites
          </button> 
          </div>
        ))
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
     
    </div>
  );
};

export default FavoritesList;
