import { BrowserRouter as Router } from "react-router-dom";

import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/UI/Search";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
};

export default App;
