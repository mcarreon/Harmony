import React from 'react';
import anime from "./anime.js";
import "./user.css";
import Button6 from "../Button6";
import Button7 from "../Button7";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class User extends React.Component {

    // componentDidMount() {
    //     anime.animateThing();
    // }

    render() {

    return <div className="container">
       
        <div id="profile">
            <p id="name">
            Vamsi Krishna
            </p>
            <img alt="pic" src="img/user.jpg" />

            <div >
                <p id="conc">Here are your upcoming concerts!</p>
                    <ul id="list">
                        <li><a href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1">P!NK: Beautiful Trauma Tour</a></li>
                        <li><a href="http://www.ticketsnow.com/resaleorder/dj-snake-tickets-los-angeles-ca-10-31-2018/tickets/2478454?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">DJ Snake</a></li>
                        <li><a href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">Elton John</a></li>
                    </ul>
                <Button6 />
            </div>

            <div id="friends2">
                <table>
                    <tr>
                        <th>Friends</th>
                        <th>Upcoming concert(s) w/ them</th>
                    </tr>
                    <tr>
                        <td>Michael</td>
                        <td><a href="https://www1.ticketmaster.com/pnk-beautiful-trauma-world-tour/event/090053493349A169?f_PPL=true&ab=efeat5787v1">P!NK: Beautiful Trauma Tour</a></td>
                    </tr>
                    <tr>
                        <td>Scott</td>
                        <td><a href="http://www.ticketsnow.com/resaleorder/elton-john-tickets-los-angeles-ca-1-22-2019/tickets/2301347?intcmp=TM90000&intoff=false&tm_link=thirdparty_tm90000">Elton John</a></td>
                    </tr>
                
                
                
                </table>
                <Button7 />
            </div>

        </div>

    </div>

            


    }
}

export default User;