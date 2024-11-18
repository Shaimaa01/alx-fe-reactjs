
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;



