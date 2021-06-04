import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increse() {
        this.setState((state) => ({
            count: state.count + 1
        }));
    }

    decrese() {
        this.setState((state) => ({
            count: state.count - 1
        }));
    }
    
    render() {
        return (
            <div>
                <div>{ this.state.count }</div>
                <button onClick={() => this.decrese()}>-</button>
                <button onClick={() => this.increse()}>+</button>
            </div>
        );
    }
}

function List({people}) {
  
    return (
        <> 
        {people.map((person) => {
            var { name, age} = person ;
            return ( 
                <div>
                    <h3>{name}</h3>
                    <p>{age} tuổi</p>
                </div>
            )
        })}
        </>
    )
}

function Example2() {
    const data = [
        {
            name: 'Pham Ngoc Thai',
            age: 22

        }]
    const [listPerson, setListPerson] = useState(data);
    const [age, setAge] = useState(0);
    const [name, setName] = useState(0);
    return (
        <div>
            <div>
                <p>Họ và Tên</p>
                <input class="namePerson" type="text" placeholder="Họ và Tên" onClick={() => setName(name)}></input>
            </div>
            <p class="agePerson">{age} Tuổi</p>
            <button onClick={()=> setAge(age+1)}>+</button>
            <button onClick={()=> setAge(age-1)}>-</button>
            <div>
                <List people = {listPerson} />
            </div>
        </div>
    )
}

ReactDOM.render(<Example />, document.getElementById("root"));
// ReactDOM.render(<Example2 />, document.getElementById("root"));
