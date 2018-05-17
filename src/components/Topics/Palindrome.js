import React, { Component } from 'react';

export default class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    changeHandler(getInput) {
        this.setState({ userInput: getInput });
    }

    tacoCat (input) {
        var forwards = input;
        var backwards = input;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if ( forwards === backwards ) {
        this.setState({ palindrome: 'true' });
        } else {
        this.setState({ palindrome: 'false' });
        }
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.changeHandler(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.tacoCat(this.state.userInput) }>Is it as cool as Tacocat?</button>
                <span className="resultsBox">{ JSON.stringify(this.state.palindrome, null, 10) }</span>
            </div>
        )
    }
}