import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useRecipesService from "../services/RecipesService";

import CardItem from "../components/UI/CardItem";

const Cuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();
  const { getQueryRecipes } = useRecipesService();

  const onRequest = async () => {
    const data = await getQueryRecipes("cuisine", params.type);

    setRecipes(data);
  };

  useEffect(() => {
    onRequest();
  }, [params.type]);

  console.log(recipes.length);
  return (
    <motion.div
      className="cuisine"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {recipes.map((recipe) => (
        <CardItem key={recipe.id} recipe={recipe} />
      ))}
    </motion.div>
  );
};

export default Cuisine;
