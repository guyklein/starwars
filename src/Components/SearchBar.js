import React, {useEffect, useState} from "react";
import {useDebounce} from '../hooks/Debounce';

function SearchBar({defaultValue= '', onSearch}) {
    const [searchValue, setSearchValue] = useState(defaultValue);
    const debouncedSearchValue = useDebounce(searchValue, 500);

    // Effect for API call
    useEffect(
        () => {
            onSearch(searchValue)
        },
        [debouncedSearchValue] // Only call effect if debounced search term changes
    );

    return (
        <input
            placeholder="Search Starwars Character"
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
        />
    );
}

export default SearchBar;
