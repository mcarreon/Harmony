import React from 'react';
import "./concerts.css";
import Button8 from "../Button8";

class Concerts extends React.Component {



    render() {

    return <div className="C1">
        <div id="concerts">
        <h1>Concerts</h1>

        <p id="conc2">Based on what you told us about your music interests and zip code, here is what we found nearby.</p>
        <table id="T2">
                    <tr>
                        <th>Concerts</th>
                        <th>Going?</th>
                    </tr>
                    <tr>
                        <td><a href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1">P!NK: Beautiful Trauma Tour</a></td>
                        <td><Button8 /></td>
                    </tr>
                    <tr>
                        <td><a href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">Elton John</a></td>
                        <td><Button8 /></td>
                    </tr>
                
                
                
                </table>
        </div>


    </div>

            


    }
}

export default Concerts;