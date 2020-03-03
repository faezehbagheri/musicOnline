import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link , withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import tracks from '../../assets/data';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: "100%",
    },
    content: {
        textAlign: 'right',
        paddingRight: '0.4rem',
        marginRight: '1.2rem'
    },
    media: {
        height: '250px'
    },
    paper: {
        width: '98%',
        backgroundColor: '#ffece5'
    },
    link:{        
        textDecoration: 'none',
        color: '#000000',
    },
});

function RelatedTracks(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
            tracks.map(track => {
                if (track.id === props.id) {
                    return (
                        <>
                        <Card className={classes.paper}>
                            <CardMedia
                                className={classes.media}
                                title={track.name}
                                image={track.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {track.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {track.singer}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`${ROUTES.DETAILS_TRACKS}/${track.id}`} className={classes.link} >
                                    <Button size="small" >
                                        ...ادامه
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                        </>
                    )
                }})
            }

        </div>
    );
}
export default withRouter(RelatedTracks)