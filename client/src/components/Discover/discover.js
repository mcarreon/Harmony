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
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=30&apikey=vApG5Du5K59rloN5BsmgN1rukqRaDEZv&segmentName=music&city=la")
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
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Venue</th>
                        <th>Date</th>
                        <th>Tickets</th>
                    </tr>
                    {events.map(event => (
                    <tr key={event.name}>
                        <td>
                            <img src={event.images[0].url} alt="thumbnail" className="thumbnail"/>
                        </td>
                        <td>{event.name}</td>
                        <td>{event.classifications[0].genre.name}</td>
                        <td>{event._embedded.venues[0].name}</td>
                        <td>{event.dates.start.localDate}</td>
                        <td>
                            <a href={event.url}>Tickets</a>
                        </td>
                    </tr>
                    ))}
                </table>
                </div>
            );
        }
    }
}

export default Discover;