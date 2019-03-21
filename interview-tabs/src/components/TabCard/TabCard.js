import React from 'react';

export default function TabCard(props) {
    console.log(props)
    return (
        <div className='tab-card'>
            <div>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}
