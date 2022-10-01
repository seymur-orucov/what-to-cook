import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { render } from "react-dom";
import useRecipesService from "../services/RecipesService";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  const { getRecipe } = useRecipesService();

  const onRequest = async () => {
    const data = await getRecipe(params.id);
    setRecipe(data);
  };

  useEffect(() => {
    onRequest();
  }, [params.id]);

  return (
    <div className="recipe-info">
      <div className="recipe-info__wrapper">
        <h1 className="recipe-info__title">😋 {recipe.title}</h1>
        <div className="recipe-info__image">
          <img src={recipe.image} alt={recipe.title} />
        </div>
      </div>
      <div className="recipe-info__block">
        <p
          className="recipe-info__description"
          dangerouslySetInnerHTML={{ __html: recipe.description }}
        ></p>
      </div>
    </div>
  );
};

export default Recipe;
