var React = require('react');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Building from 'material-ui/svg-icons/social/location-city';
var {connect} = require('react-redux');
var actions = require('../../actions/newVenueActions');
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
    // height: 100,
    width: '100%',
    // margin: '0 50px 0 50px',
    // textAlign: 'center'
    // display: 'inline-block'
  },
  button: {
    height: 60,
    // width: 'auto',
    // margin: 0,
    // textAlign: 'center',
    // display: 'inline-block'
  }
};

export var newVenueForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var newVenue = {}

    newVenue.address = this.refs.address.getValue()
    newVenue.city = this.refs.city.getValue()
    newVenue.state = this.refs.state.getValue()
    newVenue.zip_code = this.refs.zip_code.getValue()
    newVenue.name = this.refs.name.getValue()
    newVenue.email = this.refs.email.getValue()
    newVenue.phone = this.refs.phone.getValue()
    newVenue.description = this.refs.description.getValue()
    newVenue.img_url = this.refs.img_url.getValue()
    newVenue.user_id = 3

    dispatch(actions.addNewVenue(newVenue));

    axios.post('https://spacehubapi.herokuapp.com/venue', newVenue)
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
        <div style={style.title}>
          <h2>Create New Venue</h2>
          <Divider />
        </div>
        <Paper
          style={style.paper}
          zDepth={2}>
          <TextField
            ref="name"
            style={style.input}
            underlineShow={true}
            errorText="This field is required"
            floatingLabelText="Venue Name"
          /><Divider />
          <TextField
            ref="description"
            style={style.input}
            underlineShow={true}
            // hintText="Describe your venue"
            errorText="This field is required."
            floatingLabelText="Description"
            // multiLine={true}
            // rows={2}
          /><Divider />
          <TextField
            ref="img_url"
            style={style.input}
            underlineShow={true}
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="Image URL"
          /><Divider />
          <TextField
            ref="address"
            style={style.input}
            // hintText="Hint Text"
            errorText="This field is required."
            floatingLabelText="Address"
          /><Divider />
          <TextField
            ref="city"
            style={style.input}
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="City"
          /><Divider />
          <TextField
            ref="state"
            style={style.input}
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="State"
          /><Divider />
          <TextField
            ref="zip_code"
            type="number"
            style={style.input}
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="Zip Code"
          /><Divider />
          <TextField
            ref="email"
            style={style.input}
            type="email"
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="Email"
          /><Divider />
          <TextField
            ref="phone"
            style={style.input}
            // hintText="Hint Text"
            errorText="This field is required"
            floatingLabelText="Phone number"
          /><Divider />
          <FlatButton
            style={style.button}
            onTouchTap={this.handleSubmit}
            labelPosition="before"
            primary={true}
            icon={<Building />}
            fullWidth={true}
            label="Create Venue" />
        </Paper>
      </div>
    );
  }
});

export default connect((state)=>state)(newVenueForm);
