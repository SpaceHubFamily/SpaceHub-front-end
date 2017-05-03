// var React = require('react');
// import TextField from 'material-ui/TextField';
// var {connect} = require('react-redux');
// var actions = require('../../actions/newVenueActions');
//
// export var newVenueForm = React.createClass({
//   handleSubmit: function (e) {
//     e.preventDefault();
//     var {dispatch} = this.props;
//
//     var newVenue = {}
//
//     newVenue.address = this.refs..value
//     newVenue.city = this.refs..value
//     newVenue.state = this.refs..value
//     newVenue.zip_code = this.refs..value
//     newVenue.name = this.refs..value
//     newVenue.email = this.refs..value
//     newVenue.phone = this.refs..value
//     newVenue.description = this.refs..value
//     newVenue.img_url = this.refs..value
//     newVenue.user_id = this.refs..value
//
//     var todoText = this.refs.todoText.value;
//
//     if (todoText.length > 0) {
//       this.refs.todoText.value = '';
//       dispatch(actions.addTodo(todoText));
//     } else {
//       this.refs.todoText.focus();
//     }
//   },
//   render: function () {
//     return (
//       <div>
//         <TextField
//           hintText="Company/Building Name"
//           errorText="This field is required"
//           floatingLabelText="Name"
//         /><br />
//         <TextField
//           hintText="Message Field"
//           errorText="This field is required."
//           floatingLabelText="MultiLine and FloatingLabel"
//           multiLine={true}
//           rows={2}
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="The error text can be as long as you want, it will wrap."
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//         <TextField
//           hintText="Hint Text"
//           errorText="This field is required"
//           floatingLabelText="Floating Label Text"
//         /><br />
//       </div>
//     );
//   }
// });
//
// export default connect()(newVenueForm);
