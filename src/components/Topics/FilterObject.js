import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: [{
                charName: 'Hifumi',
                class: 'Druid',
                waifu: 'Shinobu',
                damageRank: 1
            },
            {
                charName: 'Otown',
                class: 'Priest',
                twitch: 'Yes',
                damageRank: 2
            },
            {
                charName: 'Hopeless',
                class: 'Hunter',
                age: 'Yes',
                damageRank: 3
            },
            {
                charName: 'Glacial',
                class: 'Warrior',
                angry: 'Yes',
                damageRank: 4
            }],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(filter) {
        this.setState({ userInput: filter });
    }

    filterThing(input) {
        let unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];

        for (let i=0;i<unFilteredArray.length;i++) {
            if (unFilteredArray[i].hasOwnProperty(input)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }

        this.setState({ filteredArray: filteredArray });
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterThing(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}