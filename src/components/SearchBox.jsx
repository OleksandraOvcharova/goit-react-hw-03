import "./SearchBox.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className="search-container">
      <label className="search-text">
        Find contacts by name
        <input
          name="search"
          className="search-input"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
