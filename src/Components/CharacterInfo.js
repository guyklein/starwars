import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {starShipsSelector} from '../redux/starShips';
import {getStarShipByCharacter} from '../redux/starWarsActions';

const baseClass = "character__info";

const CharacterInfo = ({ character, isSelected }) => {
    const starShips = useSelector(starShipsSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if(isSelected) {
            dispatch(getStarShipByCharacter(character));
        }
    }, [isSelected]);
    return (
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
    );
};

export default CharacterInfo;
