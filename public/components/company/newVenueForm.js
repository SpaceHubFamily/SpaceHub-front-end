var React = require('react');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
var {connect} = require('react-redux');
var actions = require('../../actions/newVenueActions');
import axios from 'axios'

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
        <TextField
          ref="name"
          errorText="This field is required"
          floatingLabelText="Name"
        /><br />
        <TextField
          ref="description"
          // hintText="Describe your venue"
          errorText="This field is required."
          floatingLabelText="Description"
          multiLine={true}
          rows={2}
        /><br />
        <TextField
          ref="img_url"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Image URL"
        /><br />
        <TextField
          ref="address"
          // hintText="Hint Text"
          errorText="This field is required."
          floatingLabelText="Address"
        /><br />
        <TextField
          ref="city"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="City"
        /><br />
        <TextField
          ref="state"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="State"
        /><br />
        <TextField
          ref="zip_code"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Zip Code"
        /><br />
        <TextField
          ref="email"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Email"
        /><br />
        <TextField
          ref="phone"
          // hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Phone number"
        /><br />
        <FlatButton onTouchTap={this.handleSubmit} label="Default" />
      </div>
    );
  }
});

export default connect((state)=>state)(newVenueForm);
