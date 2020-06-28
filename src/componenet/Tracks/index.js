import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: "85%",
        margin: "2rem 3rem",
        cursor:'auto',
        backgroundColor: '#f5eff5'
    },
    details: {
        width: "78%",
        height: "200px",
        display: 'flex',
        flexDirection: 'column',
        cursor:'auto'
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'right',
        fontSize: '3rem',
        cursor:'auto'
    },
    cover: {
        width: "25%",
        cursor:'auto'
    },
    controls: {
        display: 'flex',
        width: "30%",
        padding: "1rem",
        fontWeight: 400,
        cursor: "pointer",
    },
    link:{        
        textDecoration: 'none',
        color: '#000000',
        fontSize: '26px',
        fontWeight : '300',
    },
}));

 function Tracks(props) {
    const classes = useStyles();
    const track = props.track;
    return (
        <Card className={classes.root} >
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h4" variant="h4">
                        {track.name}
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {track.singer}
          </Typography>
                </CardContent>
                <div className={classes.controls}>                    
                     <Link to={{
                         pathname:`${ROUTES.DETAILS_TRACKS}/${track.id}`,
                         aboutProps:{
                             id: track.id,
                             name: track.name,
                             singer: track.singer,
                             singerId: track.singerId,
                             src: track.src,
                             img: track.img
                         }
                    }} className={classes.link} >
                        <Typography component="h6" variant="h6">
                           ...ادامه
                        </Typography>
                    </Link>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={track.img}
            />
        </Card>
    );
}
export default withRouter(Tracks)