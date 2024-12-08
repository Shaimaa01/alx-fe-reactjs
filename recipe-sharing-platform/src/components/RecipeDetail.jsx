// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe data:", error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-zinc-500 from-10% via-neutral-500 via-30% to-stone-300 to-90%   h-screen">
      <div className=" p-10  text-zinc-900 ">
        <h2 className="font-bold text-6xl  text-center font-windsong ">{recipe.title}</h2>

        {/* Image content - spans 1 column */}
        <div className=" w-56 h-56 shadow-2xl rounded-full   overflow-hidden  m-auto my-8  ">
          <img
            src={recipe.image}
            alt={recipe.title}
            className=" w-full h-full object-cover object-center rounded-full "
          />
        </div>

        {/* box of ingredient and instruction */}
        <div className="grid grid-cols-2 gap-10 justify-items-end ">
          <div>
            <h3 className="text-2xl pb-2 text-zinc-900 font-semibold">ingredients</h3>
            <ul className="text-stone-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="justify-self-start max-w-72">
            <h3 className="text-2xl pb-2 text-zinc-900 font-semibold">instructions</h3>
            <ul  className="text-stone-700">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

