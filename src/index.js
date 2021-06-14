import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';
import Book from './Book';

function App (props) {
    return (
        <div>
            <Person name={props.name} />
            <Book />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))