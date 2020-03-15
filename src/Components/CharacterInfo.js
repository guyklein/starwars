import React from "react";
import {useSelector} from 'react-redux';
import {starShipsSelector} from '../redux/Selectors/starShips';

const baseClass = "character__info";

const CharacterInfo = ({ character }) => {
    const starShips = useSelector(starShipsSelector);

    return character ? (
        <div className={baseClass}>
            <h4 className={`${baseClass}__title`}>
                {`${character.name}'s starships:`}
            </h4>
            <ul className={`${baseClass}__starship_list`}>
                {starShips.map((starShip) => (
                    <li
                        key={starShip.url}
                    >
                        { starShip.name }
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default CharacterInfo;
