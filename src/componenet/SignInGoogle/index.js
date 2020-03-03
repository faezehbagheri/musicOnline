import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SignInGoogleBase extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
    onSubmit = event => {
      this.props.firebase
        .doSignInWithGoogle()
        .then(socialAuthUser => {
          this.setState({ error: null });
        })
        .catch(error => {
          this.setState({ error });
        });
      event.preventDefault();
    };
    render() {
      const { error } = this.state;
      return (
        <form onSubmit={this.onSubmit}>
            
          <button type="submit"><FontAwesomeIcon icon={['fab', 'google']} /></button>
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }

  const SignInGoogle = compose(
    withRouter,
    withFirebase,
  )(SignInGoogleBase);

  export {SignInGoogle};