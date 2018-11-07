import React from 'react';
import "./friendSample.css";

class FS extends React.Component {

    

    render() {
    
    return <div className="sample2">
        <div id="comingU">Here is what is coming up near you!</div>

        <ul className="list2">
            <li className="list3"><a class="list2" href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1"><span id="date">APR 19</span> || P!NK: Beautiful Trauma Tour || <span id="place">The Forum- Inglewood, Ca </span></a></li>
            <li className="list3"><a class="list2" href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000"><span id="date">JAN 22</span> || Elton John || <span id="place">STAPLES Center- Los Angeles, Ca </span></a></li>
        </ul>
    
    </div>


    }
}

export default FS;