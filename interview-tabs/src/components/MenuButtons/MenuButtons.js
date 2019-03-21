import React from 'react';
import { MENU_DATA } from '../../menuData';

const menuItems = [...new Set(MENU_DATA.map(item => item.type))];

const displayMenuItems = menuItems.map(item => {
    return (
        <div className='button' key={item + Math.random() * 1}>
            <button name={item}>{item}</button>
        </div>
    );
});

export default function MenuButtons(props) {
    return <div className="button-menu" onClick={props.handleFilter}>{displayMenuItems}</div>;
}
