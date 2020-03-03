import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import firebase, { auth } from '../Firebase'
import * as ROUTES from '../../constants/routes';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import AlbumIcon from '@material-ui/icons/Album';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import HeadsetIcon from '@material-ui/icons/Headset';
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '112%',
        marginTop: '-2rem',
        paddingTop: '2rem'
    },
    header: {
        textAlign: 'center',
    },
    list: {
        listStyleType: "none",
        width: '100%',
        paddingLeft: '-0.3rem'
    },
    button: {
        width: '77%',
        padding: '0.5rem',
        fontSize: '1.2rem',
        textAlign: 'right',
        // alignItems: 'right',
        justifyContent: 'center',
        backgroundColor: '#f9ebeb'
    },
    user:{
        textAlign:'center',
        margin: '0.8rem',
    },
    link:{
        textDecoration: 'none'
    },
    text:{
        paddingRight:'0.5rem',
    }
}));

function Sidebar(props) {
    const classes = useStyles();
    const [user, setUser] = useState(null)
    const getUser = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                setUser(user);
            }
        });
    }
    const signOut=()=>{
        firebase.auth().signOut();
        setUser(null)
    }
    useEffect(() => {
        getUser()
        console.log(user)
    }, [user])
    return (
            <div className={classes.root} >
                <Typography component="h4" variant="h4" className={classes.header}>
                    MUSIC
                </Typography>
                {
                    user &&
                    <Typography component="h5" variant="h5" className={classes.user}>
                        <FaceIcon/>{user.displayName}
                    </Typography>
                }
                <hr />
                <ul className={classes.root}>
                    <li className={classes.list}>
                        <Link to={`${ROUTES.TRACKS}/${props.page}`} className={classes.link}>
                            <Button className={classes.button} variant="outlined">
                                <div className={classes.text}>آهنگ</div>
                                <AudiotrackIcon />
                            </Button>
                        </Link>
                    </li>
                    <li className={classes.list}>
                        <Link to={ROUTES.ALBUM} className={classes.link}>
                            <Button className={classes.button}  variant="outlined">
                                <div className={classes.text}>آلبوم</div>
                                <AlbumIcon />
                            </Button>
                        </Link>
                    </li>
                    <li className={classes.list}>
                        <Link to={ROUTES.MUSIC_VIDEO} className={classes.link}>
                            <Button className={classes.button}  variant="outlined">
                                <div className={classes.text}>موزیک ویدئو</div>
                                <PlayCircleFilledRoundedIcon />
                            </Button>
                        </Link>
                    </li>
                    <li className={classes.list}>
                        <Link to={ROUTES.SINGER} className={classes.link}>
                            <Button className={classes.button} variant="outlined">
                                <div className={classes.text}>خواننده</div>
                                <AccountCircleIcon />
                            </Button>
                        </Link>
                    </li>
                    {
                        user &&
                        <Button className={classes.button} variant="outlined" onClick={signOut}>
                                <div className={classes.text}>خروج </div>
                                <ExitToAppIcon />
                        </Button>
                    }
                </ul>
            </div>
        )
    }

    export default withRouter(Sidebar)
