import React, {useEffect, useState, useRef} from "react";
import classNames from "classnames";
import {List} from "react-virtualized";
import CharacterInfo from "./CharacterInfo";
import {useSelector} from 'react-redux';
import {selectedCharacterSelector} from '../redux/selectedCharacter';

const charactersBaseClass = "characters";
const charactersListBaseClass = `${charactersBaseClass}__list`;
const charactersListRowBaseClass = `${charactersListBaseClass}__row`;

const rowRenderer = ({
                         key, // Unique key within array of rows
                         index, // Index of row within collection
                         isScrolling, // The List is currently being scrolled
                         isVisible, // This row is visible within the List (eg it is not an overscanned row)
                         parent, // Reference to the parent List (instance)
                         style, // Style object to be applied to row (to position it)
                     }) => {
    const {
        list,
        selectedCharacter,
        setSelectedCharacter,
    } = parent.props;

    const selected = selectedCharacter.url === list[index].url;

    return (
        <div
            className={classNames(charactersListRowBaseClass, {[`${charactersListRowBaseClass}--selected`]: selected})}
            key={key}
            style={style}
            onClick={() => setSelectedCharacter(list[index])}
        >
            <span className={`${charactersListRowBaseClass}__name`}>{list[index].name}</span>
            <CharacterInfo
                character={list[index]}
                isSelected={selected}
            />
        </div>
    );
};

const CharactersList = ({list = [], onSelect}) => {
    const ref = useRef(null);
    const defaultCharacter = useSelector(selectedCharacterSelector);
    const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);

    useEffect(() => {
        if (selectedCharacter.url) {
            ref.current.recomputeRowHeights();
            onSelect(selectedCharacter);
        }
    }, [selectedCharacter]);

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
                rowHeight={({index}) => list[index].url === selectedCharacter.url ? selectedCharacter.starships.length * 20 + 46 : 20}
                rowRenderer={rowRenderer}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
            />
        </div>
    );
};

export default CharactersList;
