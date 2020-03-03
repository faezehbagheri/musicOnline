import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter  } from 'react-router-dom';
import firebase from '../Firebase';
import Chatbox from '../ChatBox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import tracks from '../../assets/data';
import AudiotrackTwoToneIcon from '@material-ui/icons/AudiotrackTwoTone';
import RelatedTracks from '../RelatedTracks'
import AttachFileTwoToneIcon from '@material-ui/icons/AttachFileTwoTone';
import PostAddIcon from '@material-ui/icons/PostAdd';


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
    display: 'flex',
    margin: "1rem 1rem",
    width: '93%',
    textAlign: 'right',
  }
}));

function TracksDetails(props) {
  const classes = useStyles();
  const [id , setId]=useState(Number(props.match.params.id))
  const [message , setMessage]= useState('')
  const [singerId , setSingerId]=useState()
  var i=1  

  const isRelated = () => {   
    tracks.map(t=>{
      if(t.id === id){
        setSingerId(t.singerId)
      }
    })
  }

  const handleChange = e => {
		setMessage( e.target.value);
  }
  const handleSubmit = e => {
		e.preventDefault();
		if(message !== ''){
			const chatRef = firebase.database().ref('general');
			const chat = {
				message: message,
				user: props.user.displayName,
				timestamp: new Date().getTime()
			}
			
			chatRef.push(chat);
			setMessage('');
		}
	}
  useEffect(()=>{
    isRelated()

    console.log("detail"+ Number(props.match.params.id) )
    setId(Number(props.match.params.id))
  },[props.match.params.id])
  return (
    <>
    {tracks.map(track =>{
      if(track.id === id ){
        return (
        <>
        <Card className={classes.root}>
        <CardContent>
          <img src={track.img} className={classes.media} />
          <div className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {track.name} 
              <AudiotrackTwoToneIcon />
            </Typography>
            <Typography variant="h5" color="textSecondary">
              {track.singer}
            </Typography>
          </div>
          <br></br>
          <div>
            <Typography variant="h6" className={classes.music}>
              پخش آنلاین آهنگ {track.name}
            </Typography>
            <audio
              src={track.src}
              type="audio/mp3"
              controls
              className={classes.audio}
            />
          </div>
        </CardContent>
      <CardActions>
        <div className={classes.rating}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      </CardActions>
    </Card>
    <Card className={classes.root}>
          <CardContent>
          <div className={classes.related}>
              <Typography gutterBottom variant="h5" component="h5">
                  پست های مرتبط 
                  <AttachFileTwoToneIcon />
              </Typography>
              <hr />
          </div>
          <div className={classes.paper}>
            {
              tracks.map(t => {
                if (t.singerId === singerId) {
                  if(i<4){
                    if(t.id !== id){
                      i++;
                      return <RelatedTracks id={t.id}  />
                      
                    }
                  }
                }
              })
            }
          </div>
          </CardContent>
      </Card>
      <Card className={classes.root}>
          <CardContent>
          <div className={classes.related}>
              <Typography gutterBottom variant="h5" component="h5">
                  نظرهای شما    
                  <PostAddIcon/>
              </Typography>
              <hr />
          </div>
          <div className={classes.paper}>
          {/* {props.user && 
					<div >
						<form  onSubmit={handleSubmit}>
							<input type="text" name="message" id="message" value={message} onChange={handleChange} placeholder='Leave a message...' />
						</form>

						<Chatbox />
					</div>
				}
          {!props.user && 
					<div >
						<p> to start chatting!</p>
					</div>
				} */}
        {/* {props.user.displayName} */}
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
export default withRouter(TracksDetails)