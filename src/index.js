import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import Book from './Book';
import Button from './Button';

function App (props) {
    return (
        <div>
            <Person name={props.name} />
            <Book />
            <Button />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))