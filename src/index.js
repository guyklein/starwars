import React, {useEffect} from 'react';
import {render} from 'react-dom';
import SearchBar from './Components/SearchBar';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from "./Store";
import {getAllStarWareCharacters, searchStarWarsCharacter, selectCharacter} from './redux/starWarsActions';
import CharactersList from './Components/CharactersList';
import {getVisibleResults, useResults} from './redux/results';
import {clearStarShips} from './redux/starShipsActions';
import {clearResults} from './redux/resultsActionCreators';
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
                    // dispatch(clearStarShips());
                    // dispatch(clearResults());
                    if(searchValue !== '') {
                        dispatch(searchStarWarsCharacter(searchValue));
                    }
                    else {
                        dispatch(searchStarWarsCharacter(''));
                    }
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
