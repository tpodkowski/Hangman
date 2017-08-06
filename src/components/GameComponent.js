import React from 'react';
import WordnikService from '../services/WordnikService';
import WordComponent from './WordComponent';
import LoaderComponent from './LoaderComponent'

class GameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: '',
            pressedKey: '',
        };

        this.addKeyUpListener = this.addKeyUpListener.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);

        this.getWord();
        this.addKeyUpListener();
    }

    getWord() {
        WordnikService.getRandomWord(this.state)
            .then((response) => {
                this.setState({'word': response.word.toUpperCase()});
            })
            .catch((error) => {
                console.warn('ERROR', error);
            });
    }

    addKeyUpListener() {
        window.addEventListener('keyup', this.keyUpHandler);
    }

    keyUpHandler(event) {
        if (event.keyCode > 64 && event.keyCode < 91) {
            this.setState({"pressedKey": event.key});
        }
    }

    render() {
        let word = () => {
            if (this.state.word) {
                return (
                    <WordComponent wordToGuess={this.state.word} pressedKey={this.state.pressedKey}/>
                )
            } else {
                return (
                    <LoaderComponent/>
                )
            }
        };

        return (
            <div className="container">
                {word()}
            </div>
        )
    }
}

export default GameComponent;
