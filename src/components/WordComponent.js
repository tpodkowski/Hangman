import React from 'react';

class WordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.addLetterToList(nextProps.pressedKey.toUpperCase());
    }

    isLetterInWord(letter) {
        return this.props.wordToGuess.indexOf(letter) > -1;
    }

    addLetterToList(letter) {
        if (this.isLetterInWord(letter)) {
            let pressedKeys = this.state.pressedKeys;
            pressedKeys.push(letter);
            this.setState({'pressedKeys': pressedKeys});
        }
    }

    render() {
        let letters = this.props.wordToGuess.split('').map((letter, index) => {
            return (
                <div className="letter-box" key={index}>
                    {this.state.pressedKeys.indexOf(letter) > -1 ? letter : ''}
                </div>
            )
        });

        return (
            <div className="col-xs-12">
                {letters}
            </div>
        )
    }
}

export default WordComponent;