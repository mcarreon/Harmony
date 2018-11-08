import React, { Component } from 'react';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=vApG5Du5K59rloN5BsmgN1rukqRaDEZv")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.events
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const {error, isLoaded, items}= this.state;
        if (error) {
            return <div>
                <div>Error: {error.message}</div>
                </div>
        } else if (!isLoaded) {
            return <div>
                <div>Loading... </div>
                </div>
        } else {
            return (
                <ul>
                    <button onClick={console.log('hello', items)}>CLICK ME FOR CONSOLE LOGS</button>
              </ul>
            );
        }
    }
}

export default Discover;