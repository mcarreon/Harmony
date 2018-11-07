import React from 'react';
import "./concerts.css";
import Button8 from "../Button8";

import Button11 from '../Button11';

class Concerts extends React.Component {



    render() {

    return <div className="C1">
        <div id="concerts">
        <h1>Concerts</h1>

        <div id="conc2">Search here: <input type="text"></input> <Button11 /> </div>
        <table id="T2">
                    <tr>
                        <th className="table2">Date</th>
                        <th className="table2">Name</th>
                        <th className="table2">Location</th>
                        <th className="table2">Tickets</th>
                    </tr>
                    <tr>
                        <td id="date2" className="table2">APR 19</td>
                        <td id="name2" className="table2">P!NK: Beautiful Trauma Tour</td>
                        <td id="location2" className="table2">The Forum- Inglewood, Ca</td>
                        <td id="ticket2" className="table2"><a href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1">Tickets</a></td>
                    </tr>
                    <tr>
                        <td id="date2" className="table2">JAN 22</td>
                        <td id="name2" className="table2">Elton John</td>
                        <td id="location2" className="table2">STAPLES Center- Los Angeles, Ca</td>
                        <td id="ticket2" className="table2"><a href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">Tickets</a></td>
                    </tr>
                
                
                
                </table>
        </div>


    </div>

            


    }
}

export default Concerts;