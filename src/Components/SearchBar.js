import React, {useEffect, useState} from "react";
import {useDebounce} from '../hooks/Debounce';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';

function SearchBar({defaultValue= '', onSearch, placeholder, debounceTimeout = 0}) {
    const [searchValue, setSearchValue] = useState(defaultValue);
    const debouncedSearchValue = useDebounce(searchValue, debounceTimeout);

    // Effect for API call
    useEffect(
        () => {
            onSearch(debouncedSearchValue)
        },
        [debouncedSearchValue, onSearch] // Only call effect if debounced search term changes
    );

    return (
        <Input
            className="input-search-bar"
            id="jul-search-input"
            endAdornment={
                <InputAdornment position="end">
                    {searchValue ? <ClearIcon
                        onClick={() => {
                            //clear the results
                            setSearchValue('');
                        }
                        }/> : <SearchIcon/>}
                </InputAdornment>
            }
            onChange={e => setSearchValue(e.target.value)}
            placeholder={placeholder}
            value={searchValue}
        />
    )
}

export default SearchBar;
