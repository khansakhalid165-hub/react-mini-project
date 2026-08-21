import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/Index";

export default function Details() {
  const { id } = useParams();
  const { recipedetails, setrecipedetails, favoritelist, handlefavorite } = useContext(GlobalContext);

  useEffect(() => {
    let isMounted = true;

    async function getrecipedetails() {
      try {
        const response = await fetch(
          `https://forkify-api.jonas.io/api/v2/recipes/${id}`
        );

        const data = await response.json();

        if (isMounted && data?.data?.recipe) {
          setrecipedetails(data.data);
        }
      } catch (error) {
        console.log("Recipe details error:", error);
      }
    }

    if (id) {
      getrecipedetails();
    }

    return () => {
      isMounted = false;
    };
  }, [id, setrecipedetails]);

  if (!recipedetails?.recipe) {
    return <div className="text-center py-10 text-black">Loading recipe details...</div>;
  }

  const isFavorite = favoritelist?.some((item) => item.id === recipedetails?.recipe?.id);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipedetails.recipe.image_url || ""}
            alt={recipedetails.recipe.title || "Recipe image"}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm text-cyan-700 font-medium">
          {recipedetails.recipe.publisher}
        </span>

        <h3 className="font-bold text-2xl text-black">
          {recipedetails.recipe.title}
        </h3>

        <p className="text-gray-700">
          {recipedetails?.recipe?.description || "No description available for this recipe."}
        </p>

        <div>
          <button
            onClick={() => handlefavorite(recipedetails?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

        <div>
          <span className="text-2xl font-semibold text-black">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {recipedetails?.recipe?.ingredients?.map((ingredient, index) => (
              <li key={`${ingredient.description}-${index}`} className="flex gap-2 items-start text-black">
                <span className="text-lg font-bold text-black">
                  {ingredient.quantity || ""} {ingredient.unit || ""}
                </span>
                <span className="text-base text-gray-700 font-normal">{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}