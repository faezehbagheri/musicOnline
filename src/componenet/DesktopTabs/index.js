import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { auth } from '../Firebase'
import * as ROUTES from '../../constants/routes';
import { makeStyles } from '@material-ui/core/styles';
import Tracks from '../Tracks'
import SingersDetails from '../SingerDetails'
import Singers from '../Singers'
import singers from '../../assets/singer'
import tracks from '../../assets/data';
import TracksDetails from '../TracksDetails';
import Sidebar from '../Sidebar';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderLeft: `1px solid  ${theme.palette.divider}`,
    width: '23%',
    height: '90%',
    padding: '2rem 0',
    overflow: 'hidden',
    fontWeight: '400',
    fontSize: '3rem',
  },
  over: {
    overflowY: 'scroll',
    width: '80%',
    backgroundColor: '#f9ebeb',
  },
  pagination: {
    margin:' 1.5rem ',
    position: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function DesktopTabs(props) {
  const classes = useStyles();
  const [listItem, setListItem] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [list, setList] = useState([0, 1, 2, 3, 4, 5])
  const [page , setPage]=useState(1)

  const handleChange = (event, value) => {
    setPage(value)
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const listitem = list.map(item => (item + (10 * (value-1))))     
    setListItem(listitem)        
    props.history.push(`${ROUTES.TRACKS}/${value}`)
  }
  useEffect(() => {
    props.history.push(`${ROUTES.TRACKS}/1`)
  },[])
  return (
    <div className={classes.root}>
      <Router>
        <div className={classes.over} >
          <Route path={`${ROUTES.TRACKS}/:id`}>
            {listItem.map(item => (
              <Tracks key={tracks[item].id} track={tracks[item]} />
            ))
            }
            <div className={classes.pagination}>
            <Pagination 
              count={Math.floor(tracks.length/10)} 
              page={page} 
              onChange={handleChange}
            />
          </div>
          </Route>
          <Route path={`${ROUTES.DETAILS_TRACKS}/:id`} >
            <TracksDetails/>
          </Route>
          <Route path={ROUTES.SINGER}>
              <Singers  singer={singers} />
          </Route> 
          <Route path={`${ROUTES.DETAILS_SINGER}/:id`} >
            <SingersDetails/>
          </Route>         
        </div>
        <div className={classes.tabs}>
          <Sidebar page={page} />
        </div>
      </Router>
    </div>
  );
}

export default withRouter(withFirebase(DesktopTabs))