// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.title) {
      formErrors.title = "Recipe title is required!";
      isValid = false;
    } else {
      formErrors.title = "";
    }

    if (!formData.ingredients) {
      formErrors.ingredients = "Ingredients are required!";
      isValid = false;
    } else if (formData.ingredients.split(",").length < 2) {
      formErrors.ingredients = "Please include at least two ingredients!";
      isValid = false;
    } else {
      formErrors.ingredients = "";
    }

    if (!formData.steps) {
      formErrors.steps = "Preparation steps are required!";
      isValid = false;
    } else {
      formErrors.steps = "";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add logic to handle the submitted data
    }
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
          {errors.title && (
            <p className="text-red-900 text-xs">{errors.title}</p>
          )}
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
          {errors.ingredients && <p className="text-red-900 text-xs">{errors.ingredients}</p>}
        </div>
        <div className="">
          <label className="block text-zinc-900 font-bold" htmlFor="steps">
            steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full  bg-transparent border-b-2 border-stone-300   focus:outline-none mb-2"
          ></textarea>
          {errors.steps && <p className="text-red-900 text-xs">{errors.steps}</p>}
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
