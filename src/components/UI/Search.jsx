import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const getQuery = async (e) => {
    e.preventDefault();
    navigate(`search/${input}`);
  };

  return (
    <form onSubmit={getQuery} className="search">
      <input
        className="search__input"
        type="text"
        placeholder="🤔 Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
