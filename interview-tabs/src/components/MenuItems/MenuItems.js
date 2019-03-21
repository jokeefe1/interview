import React, { useState } from 'react';
import TabCard from '../TabCard/TabCard';
import './MenuItems.css';

export default function MenuItems() {
    const MENU_DATA = [
        {
            name: 'Buffalo wings',

            description: 'Comes from chicken, not buffalo.',

            type: 'appetizer'
        },

        {
            name: 'Tuna tower',

            description: 'Raw tuna and avocado, in tower form.',

            type: 'appetizer'
        },

        {
            name: 'Salmon with potatoes',

            description: 'Fresh fish and some roasted potatoes.',

            type: 'entree'
        },

        {
            name: 'Chef salad',

            description: 'Healthy and delicious.',

            type: 'entree'
        },

        {
            name: 'Ribeye Steak',

            description: 'The best steak in town.',

            type: 'entree'
        },

        {
            name: 'Coffee Ice Cream',

            description: 'Sweet, cold, bold!',

            type: 'dessert'
        },

        {
            name: 'Apple Pie',

            description: 'Like your momma use to make!',

            type: 'dessert'
        }
    ];

    const menuItems = ['Appetizers', 'Entrees', 'Desserts'];

    const handleClick = e => {
        const { name } = e.target;
        return MENU_DATA.filter(item => item.type === name);
    };

    const displayMenuItems = menuItems.map(item => {
        return (
            <div>
                <button onClick={handleClick} name={item}>
                    {item}
                </button>
            </div>
        );
    });

    const tabCard = MENU_DATA.map(item => {
        const { name, description, type } = item;
        return (
            <TabCard
                key={name + Math.random() * 10}
                description={item.description}
                type={item.type}
            />
        );
    });

    const [active, setActive] = useState(0);

    const toggleCard = e => {
        e.persist();
        const { textContent } = e.target;
        textContent === '' && setActive(0);
        textContent === '' && setActive(1);
        textContent === '' && setActive(2);
        textContent === '' && setActive(3);
    };

    return (
        <div className='container'>
            <div className='button'>{displayMenuItems}</div>
            <section>{tabCard[`${active}`] || tabCard[0]}</section>
            {tabCard}
        </div>
    );
}
