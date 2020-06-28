import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter  } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import tracks from '../../assets/data';
import singers from '../../assets/singer';
import AudiotrackTwoToneIcon from '@material-ui/icons/AudiotrackTwoTone';
import RelatedTracks from '../RelatedTracks'
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Singers from '../Singers';
import Tracks from '../Tracks';


const useStyles = makeStyles(theme => ({
  root: {
    width: "85%",
    margin: "2rem 3rem",
  },
  media: {
    width: "60%",
    height: "400px",
    margin: "3rem 10rem",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'right',
    paddingRight: '0.4rem',
    borderRight: `0.8rem solid  #cc3333`,
    borderRadius: "0.6rem",
    marginRight: '1.2rem',
  },
  music: {
    textAlign: 'right',
    paddingRight: '0.4rem',
    borderRight: `0.8rem solid  #db98a7`,
    borderRadius: "0.5rem",
    marginRight: '1.2rem',
  },
  audio: {
    width: '70%',
    borderRadius: '1rem',
    margin: '0.3rem 5rem',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  related: {
    textAlign: 'right',
    paddingRight: '0.4rem',
    marginRight: '1.2rem',
  },
  paper: {
    // display: 'flex',
    margin: "1rem 1rem",
    width: '93%',
    textAlign: 'right',
  },
  text : {
    textAlign: 'center',
    fontSize: '1.1rem'
  },
  textHeader: {
    textAlign: 'center',
    color: '#cc3333'
  }
}));

function SingersDetails(props) {
  const classes = useStyles();
  const [id , setId]=useState(Number(props.match.params.id))


  useEffect(()=>{
    // isRelated()

    console.log("detail"+ Number(props.match.params.id) )
    setId(Number(props.match.params.id))
  },[props.match.params.id])
  return (
    <>
    {singers.map(singer =>{
      if(singer.singerId === id ){
        return (
        <>
        <Card className={classes.root}>
        <CardContent>
          <img src={singer.img} className={classes.media} />
          <div >
            <Typography gutterBottom variant="h5" component="h2" className={classes.content}>
              {singer.singer} 
            </Typography>
            <Typography variant="h6" className={classes.music}>
                {singer.bio} 
            </Typography>
          </div>
          <br></br>
        </CardContent>
    </Card>
    <Card className={classes.root}>
          <CardContent>
          <div className={classes.related}>
              <Typography gutterBottom variant="h5" component="h5">
                  آهنگ های {singer.singer}
                <AudiotrackTwoToneIcon />
              </Typography>
              <hr />
          </div>
          <div className={classes.paper}>
            {
              tracks.map(t => {
                if (t.singerId === id) {
                      return <Tracks  track={t}/>                      
                    }
              })
            }
          </div>
          </CardContent>
      </Card>
      </>
        )
      }
    })}
      
    </>
  );
}
export default withRouter(SingersDetails)