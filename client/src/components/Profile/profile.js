import React from 'react';
import Button4 from "../Button4";
import EventLister from "../EventLister"
import FS from "../friendSample"
import "./profile.css";
import anime from "./anime.js";
import Tmwidg from "../Tmwidg"
import Discover from "../Discover/discover.js"

class Profile extends React.Component {

    componentDidMount() {
        anime.animateThing();
    }

    render() {
        console.log('heythurs')
    return <div className="container">
        <div className="welcome">Harmony</div>
        <div className="buttons">
        <Button4 />
        </div>
        <div className="Tmwidg">
            <Tmwidg></Tmwidg>
        </div>
        <div className="Discover">
            <Discover></Discover>
        </div>
        <div className="C2">
            <FS />
        </div>
    </div>
    }
}

export default Profile;