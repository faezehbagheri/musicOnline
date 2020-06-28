import React ,{useState, useEffect} from "react";
import SignInForm from '../SignIn'

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import FaceIcon from '@material-ui/icons/Face';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import styles from "./headerStyle.js";

const useStyles = makeStyles(styles);
export default function Header(props) {
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
    setWidth( window.innerWidth );
  };
  const handlePropsClose = (value) => {
    setOpen(value)
    console.log('modal' + open)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleWindowSizeChange);

    return() => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  },[window.innerWidth])
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Sign In"
        >
          <Button className={classes.navLink} onClick={handleOpen}><FaceIcon />SIGN IN</Button>      
        </Tooltip>
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
            <SignInForm colseModal={handlePropsClose}/>
          </div>
        </Fade>
      </Modal>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Follow us on Telegram"
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <a href='https://t.me/Faezehbagherii' className={classes.link}><TelegramIcon/></a>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Follow us on Instagram"
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <a href='https://instagram.com/_faezehbagheri?igshid=j0t302p06zo5' className={classes.link}><InstagramIcon /></a>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
