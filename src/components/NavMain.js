import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";
const useStyles = makeStyles({
  root: {
      width: '100%',
    margin: "auto",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(158, 32, 10)",
    zIndex: 100,
    color: "white",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
      if(value===0)
        history.push("/");
      else if(value===1) history.push("/movies");
      else if(value===2) history.push("/series");
      else if(value===3) history.push("/search");
    }, [value, history]);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     <BottomNavigationAction
        style={{color: "white"}}
        label="Trending"
        icon={<TrendingUpIcon />}
     />
     <BottomNavigationAction
       style={{color: "white"}}
       label="Movies"
       icon={<MovieIcon />}
     />  
      <BottomNavigationAction
       style={{color: "white"}}
       label="TV Shows"
       icon={<TvIcon />}
     />  
     <BottomNavigationAction
       style={{color: "white"}}
       label="Search"
       icon={<SearchIcon />}
     />  
    </BottomNavigation>
  );
}
