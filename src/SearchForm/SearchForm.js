import "./SearchForm.css";

function SearchForm() {
  return (
    <form>
      <label>
        City:
        <input type="text" name="city" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchForm;
