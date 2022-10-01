import { NavLink } from "react-router-dom";

const CardItem = ({ recipe: { id, title, image } }) => {
  return (
    <NavLink to={`/recipe/${id}`} className="recipe">
      <h2 className="recipe__title">{title}</h2>
      <img src={image} alt={title} className="recipe__image" />
    </NavLink>
  );
};

export default CardItem;
