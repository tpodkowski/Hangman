import React from 'react';
import { Link} from 'react-router-dom';

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Hang The Man</h1>
                <p>Press Play to start</p>
                <Link to={'/play'} className="btn btn-success">Play</Link>
            </div>
        );
    }
}

export default MenuComponent;
