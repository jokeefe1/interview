import React from 'react';

export default function TabCard(props) {
    return (
        <div>
            <div>
                <h2>{props.type}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
