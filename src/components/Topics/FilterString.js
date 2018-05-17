import React, { Component } from 'react';

export default class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                'Anstormning',
                'Glacial',
                'Hopeless',
                'Katze',
                'Otown',
                'Hifumi',
                'Macandcheese',
                'Riv',
                'Chestrknight',
                'VyllinTwoPointOh',
                'Arok',
                'Easelen'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    changeHandler(getInput) {
        this.setState({userInput: getInput});
    }

    filterArray(input) {
        var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];

        for (let i=0;i<unFilteredArray.length;i++) {
            if (unFilteredArray[i].includes(input)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }

        this.setState({ filteredArray: filteredArray })
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> Characters: {JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.changeHandler(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB"> Filtered Characters: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}