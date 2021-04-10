import "./Filter.css";

export default function Filter({ onStatusFilterChange, onNameFilterChange }) {
  function handleFilterSelection(event) {
    event.preventDefault();
    const filterValueStatus = event.target.value;
    onStatusFilterChange(filterValueStatus);
  }
  function handleNameFilter(event) {
    event.preventDefault();
    const filterValueName = event.target.charactername.value;
    onNameFilterChange(filterValueName);
  }

  return (
    <div className="filter-form-container">
      <form onSubmit={handleNameFilter} className="filter-form">
        <label htmlFor="character-name">Name</label>
        <input
          type="text"
          name="charactername"
          id="charactername"
          placeholder="Search for your favourite character"
        />
        <label htmlFor="status">Status</label>
        <select onClick={handleFilterSelection} name="status" id="status">
          <option value="all">All</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit" className="filter-form-button"></button>
      </form>
    </div>
  );
}
