import { useHttp } from "../hooks/http.hook";

import noImage from "../assets/images/no-image.jpg";

const useRecipesService = () => {
  const { request } = useHttp();
  const _apiBase = "https://api.spoonacular.com/recipes/";
  const _apiKey = "0c3f718476d84593a5e2e600e315b5e1";
  const _recipesLimit = "11";
  const _tags = null;

  // * Get random recipes * //
  const getRecipes = async (limit = _recipesLimit, tags = _tags) => {
    const response = await request(
      `${_apiBase}random?apiKey=${_apiKey}&number=${limit}${
        tags ? `&tags=${tags}` : ""
      }`
    );

    return response.recipes.map(_transformRecipes);
  };

  // * Get recipes * //
  const getQueryRecipes = async (type, query) => {
    const response = await request(
      `${_apiBase}complexSearch?apiKey=${_apiKey}&${type}=${query}`
    );

    return response.results.map(_transformRecipes);
  };

  // * Get recipes * //
  const getRecipe = async (id) => {
    const response = await request(
      `${_apiBase}${id}/information?apiKey=${_apiKey}`
    );

    return _transformRecipes(response);
  };

  const _transformRecipes = (recipe) => {
    return {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image ? recipe.image : noImage,
      description: recipe.summary,
    };
  };

  return { getRecipes, getQueryRecipes, getRecipe };
};

export default useRecipesService;
