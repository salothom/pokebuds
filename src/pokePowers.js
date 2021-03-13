import React, { useState } from 'react';
import './index.css';
import Powers from './powers';

export default class PokePower extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            powers: [],
            powerInfo: []
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/type")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)

                    this.setState({
                        isLoaded: true,
                        powers: result.results
                    });
                    console.log(this.powers)
                },
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }


    powersDetails(powersUrl) {
        console.log(this.state)
        fetch(powersUrl).then(results => results.json()).then(
            (result) => {
                console.log(this.state.powerInfo)
                this.setState({
                    powerInfo: result
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

    render() {

        const { error, isLoaded, powers, powerInfo } = this.state;
        return <div>

            {
                error &&
                <div>Sorry! There was an Error</div>
            }
            {
                !isLoaded &&
                <div>Loading!</div>
            }
            {isLoaded &&
                <div className="container">
                    {powers.map(power => (
                        <div onClick={() => this.powersDetails(power.url)} className="powers boxShadow" key={power.name}>{power.name}</div>
                    ))}
                </div>
            }
            {isLoaded && powerInfo && <Powers powers={powerInfo} />}
        </div>

    }

}

