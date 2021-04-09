import "./Filter.css";

export default function Filter() {
  return (
    <div className="filter-form-container">
      <form className="filter-form">
        <label htmlFor="character-name">Name</label>
        <input
          type="text"
          name="character-name"
          id="character-name"
          placeholder="Search for you favourite character"
        />
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="all">All</option>
          <option value="dead">Dead</option>
          <option value="alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </div>
  );
}
