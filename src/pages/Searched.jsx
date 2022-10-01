import CardItem from "../components/UI/CardItem";
import useRecipesService from "../services/RecipesService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Searched = () => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();
  const { getQueryRecipes } = useRecipesService();

  const getRecipes = async () => {
    const data = await getQueryRecipes("query", params.query);
    setRecipes(data);
    console.log(params);
  };

  useEffect(() => {
    getRecipes();
  }, [params.query]);

  return (
    <div className="cuisine">
      {recipes.map((recipe) => (
        <CardItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Searched;
