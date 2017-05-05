var React = require('react');
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
var {connect} = require('react-redux');
import axios from 'axios'

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
class EventSetter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: null,
      start_time: null,
      end_time: null,
      open: false
    };
  }

  handleChangeDate = (event, date) => {
    this.setState({
      date: date
    })
  }

  handleChangeStartTime = (event, start_time) => {
    this.setState({
      start_time: start_time
    })
  }

  handleChangeEndTime = (event, end_time) => {
    this.setState({
      end_time: end_time
    })
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleSubmitClose = () => {
    this.setState({open: false})

    var shindig = {}

    shindig.date = this.state.date
    shindig.start_time = this.state.start_time
    shindig.end_time = this.state.end_time
    shindig.available = true
    shindig.user_id = 1
    shindig.room_id = this.props.roomID

    axios.post('https://spacehubapi.herokuapp.com/shindig', shindig)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {

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
            value={this.state.date}
            onChange={this.handleChangeDate}
            hintText="Date" />
          <TimePicker
            style={style.imput}
            value={this.state.start_time}
            onChange={this.handleChangeStartTime}
            hintText="Start Time" />
          <TimePicker
            style={style.imput}
            value={this.state.end_time}
            onChange={this.handleChangeEndTime}
            hintText="End Time" />
        </Dialog>
      </div>
    );
  }
}

export default connect((state)=>state)(EventSetter)
