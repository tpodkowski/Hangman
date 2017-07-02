import React from 'react';

class HangmanComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      word: 'SOPHISTICATED'
    };

    this.numberOfTries = 12;
    this.addKeyUpListener = this.addKeyUpListener.bind(this);
    this.isCharacterAlreadyPressed = this.isCharacterAlreadyPressed.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.addKeyUpListener();
  }

  addKeyUpListener() {
    window.addEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler(event) {
    if (event.keyCode < 65 || event.keyCode > 90 || this.isCharacterAlreadyPressed(event.key)) {
      return;
    }

    let pressedKeys = this.state.pressedKeys;
    pressedKeys.push(event.key.toUpperCase());
    this.setState({'pressedKeys': pressedKeys.slice()});
    console.log(this.state.pressedKeys);
  }

  isCharacterAlreadyPressed(character) {
    let result = false;

    for (let i = 0; i < this.state.pressedKeys.length; i++) {
      if (this.state.pressedKeys[i].toUpperCase() === character.toUpperCase()) {
        result = true;
        break;
      }
    }

    return result;
  }

  render() {
    let letters = this.state.word.split('').map((letter, index) => {
      return (
        <div className="letter-box" key={index}>
          {this.isCharacterAlreadyPressed(letter)
            ? letter
            : ''}
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

export default HangmanComponent;
