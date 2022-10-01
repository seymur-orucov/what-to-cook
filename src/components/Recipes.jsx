import { useEffect, useState } from "react";
import useRecipesService from "../services/RecipesService";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import CardItem from "./UI/CardItem";

import "@splidejs/react-splide/css";

const Recipes = ({ storage, title, slides }) => {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useRecipesService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = async () => {
    const check = localStorage.getItem(storage);

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const data = await getRecipes();
      localStorage.setItem(storage, JSON.stringify(data));
      setRecipes(data);
    }
  };

  return (
    <div>
      <h2 className="section__title">{title}</h2>
      <Splide
        options={{
          perPage: slides,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4em",
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <CardItem recipe={recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Recipes;
