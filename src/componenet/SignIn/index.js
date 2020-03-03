import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import firebase from '../Firebase'
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';

import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CardHeader from '@material-ui/core/CardHeader';
import './SigninPageStyle.css';


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.colseModal(false)
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    emailChange = event => {
        this.setState({ email: event.target.value });
    };
    passwordChange = event => {
        this.setState({ password: event.target.value });
    };
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <div item className="container" >
                <form onSubmit={this.onSubmit} >
                    <Card className="signin">
                        <CardHeader
                            title="SIGN IN"
                            className="header"
                        />
                        <Divider variant="middle" />
                        <CardContent >
                            <div className="marginBottom">
                                <Grid container spacing={1} alignItems="flex-end" >
                                    <Grid item>
                                        <EmailIcon className="color" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            value={email}
                                            onChange={this.emailChange}
                                            fullWidth
                                            autoComplete
                                            color='secondary'
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="marginBottom">
                                <Grid container spacing={1} alignItems="flex-end" >
                                    <Grid item>
                                        <LockOutlinedIcon className="color" />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            type="password"
                                            id="password"
                                            label="Password"
                                            value={password}
                                            onChange={this.passwordChange}
                                            fullWidth
                                            color='secondary'
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="marginBottom">
                            <PasswordForgetLink closeModalParent={this.props.colseModal}/>
                            </div>
                            <div className="marginBottom">
                                <SignUpLink closeModalParent={this.props.colseModal}/>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button type="submit" className="button" disabled={isInvalid} >GET STARTED</Button>
                        </CardActions>
                        <p className="center">
                            {error && <p>{error.message}</p>}
                        </p>
                    </Card>
                </form>
            </div>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInForm;