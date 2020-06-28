import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import singers from '../../assets/singer'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: "40%",
        position: 'relative',
        left: '50%',
        top: '30%',
        transform: 'translate(-50%, 10%)',
        padding: '2rem',
    },
    content: {
        textAlign: 'right',
        paddingRight: '0.2rem',
    },
    media: {
        height: '350px'
    },
    paper: {
        width: '98%',
        backgroundColor: '#ffffff',
    },
    link: {
        textDecoration: 'none',
        color: '#000000',
    },
}));

function Singer(props) {
    const classes = useStyles();
    const singer = props.singer;
    return (
        <div >
            {
                singer.map(singer => {
                    return (
                        <div className={classes.root} >
                            <Card className={classes.paper}>
                                <CardMedia
                                    className={classes.media}
                                    title={singer.singer}
                                    image={singer.img}
                                />
                                <CardContent>
                                    {/* <Typography gutterBottom variant="h5" component="h2">
                                            {singer.name}
                                        </Typography> */}
                                    <Typography variant="h5" gutterBottom color="textSecondary" component="p" className={classes.content}>
                                        {singer.singer}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`${ROUTES.DETAILS_SINGER}/${singer.singerId}`} className={classes.link} >
                                    <Button size="small" >
                                        ...ادامه
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default withRouter(Singer)