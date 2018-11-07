import React from 'react';
import Button4 from "../Button4";
import FS from "../friendSample"
import "./profile.css";
import anime from "./anime.js";

class Profile extends React.Component {

    componentDidMount() {
        anime.animateThing();
    }

    render() {
        console.log('heythurs')
    return <div className="container" size="md-2">
        <div className="welcome">Welcome to Harmony</div>
        <div className="buttons">
        <Button4 />
        </div>
        <div className="C2">
            <FS />
        </div>
    
    </div>

            


    }
}

export default Profile;