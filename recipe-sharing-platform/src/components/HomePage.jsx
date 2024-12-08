// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-zinc-500 from-10% via-neutral-500 via-30% to-stone-300 to-90%  ">
      <div className="container mx-auto ">
        <h1 className="text-4xl p-10  mb-10 text-center    font-bold  bg-gradient-to-r  to-amber-600 from-zinc-600 bg-clip-text text-transparent ">
          Recipe Sharing Platform
        </h1>
        {/* all boxs */}
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-20 justify-items-center ">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              //   one box
              className=" flex flex-col justify-between h-full group bg-gray-200  shadow-md border-slate-600 rounded-[75px] p-4  transition relative pt-20 text-center   duration-300 hover:scale-105 "
            >
              <div className=" w-32 h-32 shadow-2xl rounded-full   overflow-hidden absolute -top-12 left-1/2 transform -translate-x-1/2 duration-300 group-hover:rotate-12 group-hover:scale-105 ">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className=" w-full h-full object-cover object-center rounded-full "
                />
              </div>
              <h2 className="text-lg font-bold mt-2 bg-gradient-to-r  to-amber-600 via-lime-600 bg-clip-text text-transparent">
                {recipe.title}
              </h2>
              <p className="text-gray-500 leading-7 max-w-52">
                {recipe.summary}
              </p>
              <div className="  bg-gradient-to-r  to-amber-600 from-zinc-600  w-fit text-white p-2 mx-auto rounded-lg font-semibold   ">
                <Link className="" to={`/recipe/${recipe.id}`}>View Recipe</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
