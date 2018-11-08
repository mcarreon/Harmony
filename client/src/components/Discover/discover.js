import React, { Component } from 'react';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        }
    }
    componentDidMount() {
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=30&apikey=vApG5Du5K59rloN5BsmgN1rukqRaDEZv&genreId=")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        events: result._embedded.events
                    });
                    console.log(result)
                }
            )
    }

    render() {
        const {error, isLoaded, events}= this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        // } else if (!isLoaded) {
        //     return <div>Loading... </div>
        } else {
            return (
                <div>
                <ul>
                    {events.map(event => (
                        <li key={event.name}>
                        {event.name}
                        </li>
                    ))}
                </ul>
                    <button onClick={this.componentDidMount}>CLICK ME FOR CONSOLE LOGS</button>
                </div>
            );
        }
    }
}

export default Discover;