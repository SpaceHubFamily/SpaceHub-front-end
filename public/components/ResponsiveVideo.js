import React, { Component } from 'react';

class ResponsiveVideo extends Component {

    render () {
        return (
            <video id="background-video" autoPlay="true" loop>
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.webm" type="video/webm" />
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

export default ResponsiveVideo;
