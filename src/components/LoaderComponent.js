import React from 'react';

class LoaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Loading...</h1>
                <i className="fa fa-spin fa-circle-o-notch"/>
            </div>
        )
    }
}

export default LoaderComponent;