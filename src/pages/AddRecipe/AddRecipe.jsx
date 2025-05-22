import React from 'react';

const AddRecipe = () => {
    
    

    return (
        <div className='my-10 mb-24 mx-auto'>
            {/* title/sub-title */}
            <h1 className='font-medium text-3xl text-center mb-6'>Add New Recipe</h1>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
                Fill out the form below to share your delicious recipe with the community. Make sure to include a catchy title, a list of ingredients, and step-by-step instructions. Let the world taste your creativity!
            </p>

            {/* form section */}
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Image URL */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Image URL</label>
                        <input type="text" className="input w-full" placeholder="Enter image URL" />
                    </fieldset>

                    {/* Title */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Title</label>
                        <input type="text" className="input w-full" placeholder="Recipe title" />
                    </fieldset>

                    {/* Ingredients */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Ingredients</label>
                        <textarea className="textarea w-full" placeholder="List of ingredients"></textarea>
                    </fieldset>

                    {/* Instructions */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Instructions</label>
                        <textarea className="textarea w-full" placeholder="Cooking instructions"></textarea>
                    </fieldset>

                    {/* Cuisine Type Dropdown */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Cuisine Type</label>
                        <select className="select w-full">
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </fieldset>

                    {/* Preparation Time */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box">
                        <label className="label">Preparation Time (minutes)</label>
                        <input type="number" className="input w-full" placeholder="Time in minutes" />
                    </fieldset>

                    {/* Categories Checkboxes */}
                    <fieldset className="fieldset bg-base-200 p-6 rounded-box col-span-1 md:col-span-2">
                        <label className="label">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(category => (
                                <label key={category} className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    {category}
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-success w-full mt-6">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;