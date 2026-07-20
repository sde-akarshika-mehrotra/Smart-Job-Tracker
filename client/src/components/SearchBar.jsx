function SearchBar({search, setSearch}) {

    return (
        <input
        type = "text"
        placeholder = "Search Company..."
        value = {search}
        onChange={(e) => 
            setSearch(e.target.value)
        }
        />
    );
}

export default SearchBar; 