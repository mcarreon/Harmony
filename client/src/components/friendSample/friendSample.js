import React from 'react';
import "./friendSample.css";

class FS extends React.Component {

    

    render() {
    
    return <div className="sample2">
        <div id="comingU">Here is what is coming up near you!</div>

        <table id="T3">
                    <tr>
                        <th className="table3">Date</th>
                        <th className="table3">Name</th>
                        <th className="table3">Location</th>
                        <th className="table3">Tickets</th>
                    </tr>
                    <tr>
                        <td id="date3" className="table3">APR 19</td>
                        <td id="name3" className="table3">P!NK: Beautiful Trauma Tour</td>
                        <td id="location3" className="table3">The Forum- Inglewood, Ca</td>
                        <td id="ticket3" className="table3"><a href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1">Tickets</a></td>
                    </tr>
                    <tr>
                        <td id="date3" className="table3">JAN 22</td>
                        <td id="name3" className="table3">Elton John</td>
                        <td id="location3" className="table3">STAPLES Center- Los Angeles, Ca</td>
                        <td id="ticket3" className="table3"><a href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">Tickets</a></td>
                    </tr>
                
                
                
                </table>
    
    </div>


    }
}

export default FS;