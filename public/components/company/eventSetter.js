import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
var {connect} = require('react-redux');

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
class EventSetter extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleSubmitClose = () => {
    this.setState({open: false});

    axios.post('https://spacehubapi.herokuapp.com/venue', newVenue)
    .then(res => console.log(res, 'good'))
    .catch(err => console.log(err, 'bad'))
  };

  render() {
    console.log(this.props.roomID);
    var style = {
      imput: {
        display: 'inline'
      }
    }

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmitClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create Available Time" onTouchTap={this.handleOpen} />
        <Dialog
          title="Choose a Date and Time"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose} >

          <DatePicker
            style={style.imput}
            hintText="Date" />
          <TimePicker
            style={style.imput}
            hintText="Start Time" />
          <TimePicker
            style={style.imput}
            hintText="End Time" />
        </Dialog>
      </div>
    );
  }
}

export default connect((state)=>state)(EventSetter)
