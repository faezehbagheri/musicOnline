import React  from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);
export default function Footer(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button className={classes.email} ><EmailIcon />faezehbagheri98@gmail.com</Button>   
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip title="Follow us on Telegram" >
          <Button color="transparent" target="_blank" className={classes.navLink} >
            <TelegramIcon/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip title="Follow us on Instagram" >
          <Button color="transparent" target="_blank" className={classes.navLink} >
            <InstagramIcon />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
