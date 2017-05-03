import React, { Component } from 'react';

class ResponsiveVideo extends Component {

    render () {
        return (
          <div className="video-container">
            <div className="title-video">SpaceHub</div>
            {/* <video id="background-video" autoPlay="true" loop>
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.webm" type="video/webm" />
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
          </div>
        )
    }
}

export default ResponsiveVideo;
