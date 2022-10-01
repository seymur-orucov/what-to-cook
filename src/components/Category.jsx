import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiCook, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <ul className="category__list">
        <li className="category__item">
          <NavLink to={"/"} className="category__link">
            <GiCook />
            <h4>Main</h4>
          </NavLink>
        </li>
        <li className="category__item">
          <NavLink to={"cuisine/italian"} className="category__link">
            <FaPizzaSlice />
            <h4>Italian</h4>
          </NavLink>
        </li>
        <li className="category__item">
          <NavLink to={"cuisine/american"} className="category__link">
            <FaHamburger />
            <h4>American</h4>
          </NavLink>
        </li>
        <li className="category__item">
          <NavLink to={"cuisine/thai"} className="category__link">
            <GiNoodles />
            <h4>Thai</h4>
          </NavLink>
        </li>
        <li className="category__item">
          <NavLink to={"cuisine/korean"} className="category__link">
            <GiChopsticks />
            <h4>Korean</h4>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Category;
