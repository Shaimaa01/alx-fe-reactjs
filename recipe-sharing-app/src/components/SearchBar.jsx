import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      filterRecipes(); // Trigger filtering whenever search term changes
    };
  
    return (
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
      />
    );
  };
  
  export default SearchBar;
