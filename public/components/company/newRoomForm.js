var React = require('react');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
var {connect} = require('react-redux');
var actions = require('../../actions/newRoomActions');
import axios from 'axios'

export var newRoomForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var newRoom = {}

    newRoom.name = this.refs.name.getValue()
    newRoom.capacity = this.refs.capacity.getValue()
    newRoom.hour_rate = this.refs.hour_rate.getValue()
    newRoom.day_rate = this.refs.day_rate.getValue()
    newRoom.img_url = this.refs.img_url.getValue()
    newRoom.available = this.refs.available.getValue()
    newRoom.venue_id = 1

    dispatch(actions.addNewRoom(newRoom));

    axios.post('https://spacehubapi.herokuapp.com/room', newRoom)
    .then(res => console.log(res, 'good'))
    .catch(err => console.log(err, 'bad'))

    // if (todoText.length > 0) {
    //   this.refs.todoText.value = '';
    // } else {
    //   this.refs.todoText.focus();
    // }
  },
  render: function () {
    return (
      <div>
        <TextField
          ref="name"
          errorText="This field is required"
          floatingLabelText="Name"
        /><br />
        <TextField
          ref="capacity"
          // hintText="Describe your venue"
          errorText="This field is required."
          floatingLabelText="Capacity"
        /><br />
        <TextField
          ref="hour_rate"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Hour Rate"
        /><br />
        <TextField
          ref="day_rate"
          // hintText="Hint Text"
          errorText="This field is required."
          floatingLabelText="Day Rate"
        /><br />
        <TextField
          ref="img_url"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Image URL"
        /><br />
        <TextField
          ref="available"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Available"
        /><br />
        <FlatButton onTouchTap={this.handleSubmit} label="Default" />
      </div>
    );
  }
});

export default connect((state)=>state)(newRoomForm);
