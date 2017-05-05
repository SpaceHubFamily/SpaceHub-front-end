
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
// const nodemailer = require('nodemailer');
// import Nodemailer from 'nodemailer';

const RequestButton = ({shindig}) => {

  // // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //         user: 'spacehubus@gmail.com',
  //         pass: 'leatherjacket'
  //     }
  // });
  //
  // // setup email data with unicode symbols
  // let mailOptions = {
  //     from: '"Fred Foo 👻" <spacehubus@gmail.com>', // sender address
  //     to: 'jeffhernandez89@gmail.com', // list of receivers
  //     subject: 'Hello ✔', // Subject line
  //     text: 'Hello world ?', // plain text body
  //     html: '<b>Hello world ?</b>' // html body
  // };
  //
  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //         return console.log(error);
  //     }
  //     console.log('Message %s sent: %s', info.messageId, info.response);
  // });

  // const shindigs = props.shindigs
  // const shindigList = shindigs.map(shindig => {
  //   return <ShindigListItem key={shindig.id} shindig={shindig} />
  // })

  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100%',
    },
  };

  return (
    <div className="req-contain">
      <RaisedButton
        className="request-btn"
        href=""
        target="_blank"
        label="Request Space"
        icon={<FontIcon className="muidocs-icon-custom-github" />}
      />
    </div>
  )
}

export default RequestButton
