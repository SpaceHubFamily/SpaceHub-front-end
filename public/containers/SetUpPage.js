import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


table.string('first_name');
table.string('last_name');
table.string('img_url');
table.string('phone_number');
table.string('company_name');
table.string('email');
table.string('description', [1000]);
table.boolean('venue_owner');
table.boolean('event_planner');



class SetUpContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
}

export default SetUpContainer



// const SetUpPage = () => (
//   <div>
//     <TextField
//       hintText="Hint Text"
//       errorText="This field is required"
//     /><br />
//     <TextField
//       hintText="Hint Text"
//       errorText="The error text can be as long as you want, it will wrap."
//     /><br />
//     <TextField
//       hintText="Hint Text"
//       errorText="This field is required"
//       floatingLabelText="Floating Label Text"
//     /><br />
//     <TextField
//       hintText="Message Field"
//       errorText="This field is required."
//       floatingLabelText="MultiLine and FloatingLabel"
//       multiLine={true}
//       rows={2}
//     /><br />
//   </div>
// );
//
// export default SetUpPage;