import React , { useState } from 'react';

function Button (props) {
    const [value, setValue] = useState(0);

return (
    <div>
        <p className= "value">Current value : {value}</p>
        <button className= "btn" onClick={() => setValue(value+1)}>Click here!!</button>
    </div>
)
}
export default Button ;