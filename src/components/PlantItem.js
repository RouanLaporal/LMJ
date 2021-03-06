import React from 'react';
import '../styles/PlantItem.css';
import CareScale from './CareScale';

function PlantItem({name, cover, id, light, water}) {
    return (
        <div>
            <li key={id} className='lmj-plant-item'>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
                {name}
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </li>
        </div>
    );
}

export default PlantItem;