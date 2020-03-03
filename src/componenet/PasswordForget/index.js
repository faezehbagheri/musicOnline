import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import firebase from '../Firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import CardHeader from '@material-ui/core/CardHeader';
import './style.css'

const PasswordForgetPage = (props) => (
  <div>
    <PasswordForgetForm colseModal={props.colseModal} closeModalParent={props.closeModalParent}/>
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  classes = {
    zIndex: '2',
    paddingTop: '40vh',
    position: 'relative',
    color: '#FFFFFF',
    paddingBottom: '200px',
  }
  onSubmit = event => {
    const { email } = this.state;
    firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.colseModal(false)
        this.props.closeModalParent(false)
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ email: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <Card className="signin">
            <CardHeader
              title="PasswordForget"
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
                      value={this.stateemail}
                      onChange={this.onChange}
                      fullWidth
                      autoComplete
                      color='secondary'
                    />
                  </Grid>
                </Grid>
              </div>
            </CardContent>
            <CardActions>
              <Button type="submit" className="button" disabled={isInvalid} >Reset My Password</Button>
            </CardActions>
            <p className="center">
              {error && <p>{error.message}</p>}
            </p>
          </Card>
        </form>
      </div>
    );
  }
}
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
function PasswordForgetLink(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 500;
  const isDesktop = width > 850;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  const handlePropsClose = (value) => {
    setOpen(value)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [window.innerWidth])
  return (
    <p>
      <Link className="link" onClick={handleOpen}>Forgot Password?</Link>
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
            <PasswordForgetPage colseModal={handlePropsClose} closeModalParent={props.closeModalParent} />
          </div>
        </Fade>
      </Modal>
    </p>
  )
}
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };