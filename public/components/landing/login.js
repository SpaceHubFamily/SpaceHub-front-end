import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import { Link } from 'react-router-dom'



const schema = new passwordValidator();

schema.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
                      // Should not have spaces


export default class LoginModal extends React.Component {
  state = {
    open: false,
  };

  constructor(props) {
    super(props);
    console.log('this', this.props);
  }

  handleOpen = () => {
    console.log('hello');
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleEmailChange = (e) => {
    this.setState({email: e.target.value })
  }
  emailErrorText = () => {
    console.log('objectef');
    if (this.state.email === undefined) {
      return undefined;
    }
    if (EmailValidator.validate(this.state.email)) {
      return undefined;
    } else {
      return 'Please enter a valid email'
    }
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value })
  }
  passwordErrorText = () => {
    if(this.state.password === undefined) {
      return undefined;
    }
    if(schema.validate(this.state.password)) {
      return undefined;
    } else {
      return 'Please include upper and lowercase letters and a number'
    }
  }
  login = () => {
    this.props.store.login(this.state.email, this.state.password)
  }
  render() {
    const actions = [
      <Link to='/company'>
        <FlatButton
          label="login"
          primary={true}
          onTouchTap={this.login}
        />
      </Link>
    ]

    console.log(this.props.store.user);

    if (this.props.store.user) {
      return null;
    }

    return (
      <div>
          <FlatButton label="Login" onTouchTap={this.handleOpen} />
          <Dialog
            title="Login"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <TextField
              hintText="Email field"
              floatingLabelText="Email"
              type="email"
              errorText={this.emailErrorText()}
              onChange={this.handleEmailChange}
            />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
              errorText={this.passwordErrorText()}
              onChange={this.handlePasswordChange}
            />
          </Dialog>
      </div>
    );
  }
};
