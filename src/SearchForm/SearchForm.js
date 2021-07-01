import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div>
      <form id="SearchForm">
        <label>
          City:
          <input type="text" name="city" placeholder="Search for a City" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
