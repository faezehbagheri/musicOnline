import React, { Component, useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import firebase from '../Firebase'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    width: window.innerWidth,
    error: null,
};
class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        event.preventDefault();
        const { email, username, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user
                    .updateProfile({ displayName: username })
                    .then(() => {
                        this.props.colseModal(false)
                        this.props.closeModalParent(false)
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
            })
            .catch(error => {
                this.setState({ error });
            });
    };
    fullnameChange = event => {
        this.setState({ username: event.target.value });
    };
    emailChange = event => {
        this.setState({ email: event.target.value });
    };
    passwordChange = event => {
        this.setState({ password: event.target.value });
    };
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    render() {
        const { username, email, password, width, error } = this.state;
        const isInvalid = username === '' || password === '' || email === '';
        return (
            <div>
                <Grid className="container" >
                    <form onSubmit={this.onSubmit} >
                        <Card className='signin' >
                            <CardHeader title="SIGN UP" className="header" />
                            <Divider variant="middle" />
                            <CardContent >
                                <div className="marginBottom">
                                    <Grid container spacing={1} alignItems="flex-end" >
                                        <Grid item>
                                            <AccountCircle className="color" />
                                        </Grid>
                                        <Grid item xs={10}>
                                            <TextField
                                                id="username"
                                                label="UserName"
                                                value={username}
                                                onChange={this.fullnameChange}
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
                            </CardContent>
                            <CardActions>
                                <Button type="submit" className="button" disabled={isInvalid} >GET STARTED</Button>
                            </CardActions>
                            <p className="center">
                                {error && <p>{error.message}</p>}
                            </p>
                        </Card>
                    </form>
                </Grid>
            </div>
        )
    }
}

const SignUpPage = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

const useStyles = makeStyles(theme => ({
    container: {
        zIndex: '2',
        paddingTop: '40vh',
        position: 'relative',
        color: '#FFFFFF',
        paddingBottom: '200px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sigin: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: ' translate(-50%, -50%)',
        background: 'rgb(255, 255, 255)',
        width: '50%',
        height: '70%',
    },
    isDesktopRoot: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: ' rgb(255, 255, 255)',
        width: '30%',
        height: '70%'
    },
    isTabletRoot: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgb(255, 255, 255)',
        width: '50%',
        height: '70%'
    },
    isMobileRoot: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgb(255, 255, 255)',
        width: '85%',
        height: '70%'
    },
}));
function SignUpLink(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 500;
    const isDesktop = width > 850;
    const handleOpen = () => {
        setOpen(true);
    };
    const handlePropsClose = (value) => {
        setOpen(value)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [window.innerWidth])
    return (
        <p className="color">
            Don't have an account? <Link className="link" onClick={handleOpen}>Sign Up</Link>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div
                        className={isDesktop ? classes.isDesktopRoot : isMobile ? classes.isMobileRoot : classes.isTabletRoot}
                    >
                        <SignUpPage colseModal={handlePropsClose} closeModalParent={props.closeModalParent} />
                    </div>
                </Fade>
            </Modal>
        </p>
    )
}
export default SignUpPage;
export { SignUpLink };
