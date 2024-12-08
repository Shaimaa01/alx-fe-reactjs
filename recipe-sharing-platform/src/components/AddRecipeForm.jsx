// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (event) => {
    
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add logic to handle the submitted data
    }
  };

  const validateForm = () => {
    if (!formData.title || !formData.ingredients || !formData.steps) {
      alert("All fields are required!");
      return false;
    }
    if (formData.ingredients.split(",").length < 2) {
      alert("Please include at least two ingredients!");
      return false;
    }
    return true;
  };

  return (
    <div className="w-screen h-full bg-gradient-to-r from-zinc-500 from-10% via-neutral-500 via-30% to-stone-300 to-90%  p-10">
      <form
        onSubmit={handleSubmit}
        className="  max-w-md mx-auto p-6  shadow-xl rounded border-double border-4 border-zinc-500  "
      >
        <div className="">
          <label className="block text-zinc-900 font-bold " htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full  bg-transparent border-b-2 border-stone-300   focus:outline-none  mb-2"
          />
        </div>
        <div className="">
          <label
            className="block text-zinc-900 font-bold"
            htmlFor="ingredients"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full  bg-transparent border-b-2 border-stone-300   focus:outline-none mb-2"
          ></textarea>
        </div>
        <div className="">
          <label
            className="block text-zinc-900 font-bold"
            htmlFor="steps"
          >
           steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full  bg-transparent border-b-2 border-stone-300   focus:outline-none mb-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r  to-amber-600 from-zinc-600  w-fit text-white p-2 mx-auto rounded-lg font-semibold  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
