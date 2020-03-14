import React, {useEffect} from 'react';
import {render} from 'react-dom';
import SearchBar from './Components/SearchBar';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from "./Store";
import {getAllStarWareCharacters, searchStarWarsCharacter, selectCharacter} from './redux/starWarsActions';
import CharactersList from './Components/CharactersList';
import {getVisibleResults} from './redux/results';
import './style.css';

function App(props) {
    const dispatch = useDispatch();
    const results = useSelector(getVisibleResults);

    useEffect(() => {
        dispatch(getAllStarWareCharacters())
    }, []);

    return (
        <div>
            <SearchBar
                onSearch={(searchValue) => {
                    dispatch(searchStarWarsCharacter(searchValue));
                }}
            />
           <CharactersList
               list={results}
               onSelect={ (character)=> {
                   dispatch(selectCharacter(character));
               } }
           />
        </div>
    );
}

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
