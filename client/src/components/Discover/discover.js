import React, { Component } from 'react';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=vApG5Du5K59rloN5BsmgN1rukqRaDEZv")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        events: result.events
                    });
                    console.log(result)
                }
            )
    }

    render() {
        const {error, isLoaded, events}= this.state;
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