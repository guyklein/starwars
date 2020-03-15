import React, {useEffect, useState, useRef} from "react";
import {List} from "react-virtualized";
import {useSelector} from 'react-redux';
import {selectedCharacterSelector} from '../redux/Selectors/selectedCharacter';
import {SearchResult} from './SearchResult';

const charactersBaseClass = "characters";
const charactersListBaseClass = `${charactersBaseClass}__list`;

const CharactersList = ({list = [], onSelect}) => {
    const ref = useRef(null);
    const defaultCharacter = useSelector(selectedCharacterSelector);
    const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);

    useEffect(() => {
        if (selectedCharacter.url) {
            ref.current.recomputeRowHeights();
            onSelect(selectedCharacter);
        }
    }, [selectedCharacter, onSelect]);

    return (
        <div className={charactersBaseClass}>
            <h4 className={`${charactersBaseClass}__title`}>Characters:</h4>
            <List
                ref={ref}
                className={charactersListBaseClass}
                list={list}
                width={300}
                height={200}
                rowCount={list.length}
                rowHeight={20}
                rowRenderer={({style, index}) =>
                    <SearchResult
                        currentCharacter={list[index]}
                        key={list[index].url}
                        selectedCharacter={selectedCharacter}
                        setSelectedCharacter={setSelectedCharacter}
                        style={style}
                    />
                }
            />
        </div>
    );
};

export default CharactersList;
