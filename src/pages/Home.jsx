import { motion } from "framer-motion";

import Recipes from "../components/Recipes";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Recipes storage="veggie" title="Our Vegetarian Picks" slides="3" />
      <Recipes storage="popular" title="Popular Picks" slides="4" />
    </motion.div>
  );
};

export default Home;
