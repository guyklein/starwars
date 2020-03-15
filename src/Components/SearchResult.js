import React from 'react';
import classNames from 'classnames';

const charactersBaseClass = "characters";
const charactersListBaseClass = `${charactersBaseClass}__list`;
const charactersListRowBaseClass = `${charactersListBaseClass}__row`;

export const SearchResult = (props) => {

    const {
        currentCharacter,
        selectedCharacter,
        setSelectedCharacter,
        style,
    } = props;

    const selected = selectedCharacter.url === currentCharacter.url;

    return (
        <div
            className={classNames(charactersListRowBaseClass, {[`${charactersListRowBaseClass}--selected`]: selected})}
            key={currentCharacter.url}
            style={style}
            onClick={() => setSelectedCharacter(currentCharacter)}
        >
            <span className={`${charactersListRowBaseClass}__name`}>{currentCharacter.name}</span>
        </div>
    );
}

