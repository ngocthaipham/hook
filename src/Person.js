import React from 'react';

function Person(props) {
    if (props.name) {
        return <p>{props.name}</p>;
    } else {
        return <p>no person</p>;
    }
}
export default Person

