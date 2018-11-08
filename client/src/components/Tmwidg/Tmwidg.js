import React, { Component } from 'react';

class Tmwidg extends Component {
    render () {
        return (
            <div>
                <div w-type="event-discovery" w-tmapikey="5QGCEXAsJowiCI4n1uAwMlCGAcSNAEmG" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="Music" w-theme="listview" w-colorscheme="light" w-width="350" w-height="600" w-size="25" w-border="2" w-borderradius="4" w-postalcode="" w-radius="25" w-period="month" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="custom" w-titlelink="off" w-sorting="groupByName" w-id="id_rnexdw" w-countrycode="US" w-source="ticketmaster" w-postalcodeapi="" w-latlong=""></div>
                <script src="https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js"></script>
            </div>
        )
    }
}

export default Tmwidg