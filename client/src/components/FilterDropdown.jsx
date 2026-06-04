function FilterDropDown({ filter, setFilter }) {

    return (
        <select
            value={filter}
            onChange={(e) =>
                setFilter(e.target.value)
            }
        >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Selected</option>
            <option>Rejected</option>
        </select>
    );
}

export default FilterDropDown;