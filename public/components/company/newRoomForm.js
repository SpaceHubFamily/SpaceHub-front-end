
var React = require('react');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Room from 'material-ui/svg-icons/content/weekend';
// import Checkbox from 'material-ui/Checkbox';
var {connect} = require('react-redux');
var actions = require('../../actions/newRoomActions');
import axios from 'axios'

const style = {
  paper: {
    margin: '50px 60px 50px 400px',
    padding: 70,
    width: '60%',
    zDepth: 2,

  },
  title: {
    margin: '0px 60px 50px 400px',
    fontSize: 30,
    zDepth: 2,
    letterSpacing: 5
  },

  input: {
    width: '100%',
  },
  button: {
    height: 60,
  }
}

export var newRoomForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props

    var newRoom = {}

    newRoom.name = this.refs.name.getValue()
    newRoom.capacity = this.refs.capacity.getValue()
    newRoom.hour_rate = this.refs.hour_rate.getValue()
    newRoom.day_rate = this.refs.day_rate.getValue()
    newRoom.img_url = this.refs.img_url.getValue()
    // newRoom.available = this.refs.available.getValue()
    newRoom.venue_id = 1

    dispatch(actions.addNewRoom(newRoom));

    axios.post('https://spacehubapi.herokuapp.com/room', newRoom)
    .then(res => console.log(res, 'good'))
    .catch(err => console.log(err, 'bad'))

  },
  render: function () {
    return (
      <div>
        <div style={style.title}>
          <h2>Create New Room</h2>
          <Divider />
        </div>
        <Paper
          style={style.paper}
          zDepth={2}>
          <TextField
            ref="name"
            style={style.input}
            // errorText={touched && "This field is required"}
            floatingLabelText="Room Name"
          /><br/>
          <TextField
            ref="capacity"
            style={style.input}
            type="number"
            // hintText="Describe your venue"
            // errorText="This field is required."
            floatingLabelText="Capacity"
          /><br/>
          <TextField
            ref="hour_rate"
            style={style.input}
            type="number"
            // hintText="Hint Text"
            // errorText="This field is required"
            floatingLabelText="Hourly Rate"
          /><br/>
          <TextField
            ref="day_rate"
            style={style.input}
            type="number"
            // hintText="Hint Text"
            // errorText="This field is required."
            floatingLabelText="Daily Rate"
          /><br/>
          <TextField
            ref="img_url"
            style={style.input}
            // hintText="Hint Text"
            // errorText="This field is required"
            floatingLabelText="Image URL"
          /><br/>
          {/* <Checkbox
            ref="available"
            style={style.input}
            // hintText="Hint Text"
            // errorText="This field is required"
            label="Available"
          /><br/> */}
          <Link to='/company'><FlatButton
            style={style.button}
            onTouchTap={this.handleSubmit}
            labelPosition="before"
            primary={true}
            icon={<Room />}
            fullWidth={true}
            label="Create Room" />
          </Link>
        </Paper>
      </div>
    )
  }
})

export default connect((state)=>state)(newRoomForm)
