import React from 'react';
import {render} from 'react-dom';
import SearchBar from './Components/SearchBar';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from "./Store";
import {searchStarWarsCharacter, selectCharacter} from './redux/starWarsActions';
import {updateResults} from './redux/ActionCreators/resultsActionCreators';
import ResultsPane from './Components/ResultsPane';
import {StarWarsRequests} from './services/swapi';
import useDebounceSearchApi from './hooks/debounceApiSearch';
import './style.css';
import CharactersList from './Components/CharactersList';
import CharacterInfo from './Components/CharacterInfo';
import {getVisibleResults, getVisibleSelectedCharacter} from './redux/Selectors/results';

function App() {
    const dispatch = useDispatch();
    const {search} = useDebounceSearchApi(() => {
        return StarWarsRequests.getAllStarWarsCharacters();
    }, 0);
    const results = useSelector(getVisibleResults);
    const selectedCharacter = useSelector(getVisibleSelectedCharacter);

    return (
        <div>
            <SearchBar
                onSearch={(searchValue) => {
                    dispatch(searchStarWarsCharacter(searchValue));
                }}
                placeholder={"Search Starwars Character"}
                // debounceTimeout={1000}
            />
            <ResultsPane
                search={search}
                onResults={(results) => {
                    dispatch(updateResults(results));
                }}
                children={
                    <>
                        <CharactersList
                            list={results}
                            onSelect={(character) => {
                                dispatch(selectCharacter(character));
                            }}
                        />
                        <CharacterInfo
                        character={selectedCharacter}
                        />
                    </>
                }
            />
        </div>
    );
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
