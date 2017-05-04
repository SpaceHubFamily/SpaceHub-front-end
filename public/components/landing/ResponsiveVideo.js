import React, { Component } from 'react';

class ResponsiveVideo extends Component {

    render () {
        return (
          <div className="video-container">
            <div className="title-video">SpaceHub</div>
            <div className="main-description">
              <div className="main-text">
                {/* Spacehub is an invitation for venue owners and event planners to connect and find the best match for their needs. */}
              {/* <br></br> */}
                 SpaceHub is an online marketplace that allows users to provide and search for the perfect venue spots for offsite meetings,  team building events, meetups, office space, group happy hours, Jen's bachelorette party and more!
              <br></br>
                 Our platform brings visibility to underutilized space in an office, restaurant or gallery and turns it into a profitable gig.
              <br></br>
              <br></br>
                <b>  It's super easy to sign up and start exploring.</b>
              </div>
            </div>
            <video id="background-video" autoPlay="true" loop>
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.webm" type="video/webm" />
              <source src="https://coverr.co/s3/mp4/Very-Open-Space.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        )
    }
}

export default ResponsiveVideo;
