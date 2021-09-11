import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from '../../config/config';
import { Button } from '@material-ui/core';
import YouTubeIcon from "@material-ui/icons/YouTube";
import './ContentDisplay.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
      width: "90%",
      height: "88%",
      backgroundColor: "rgb(255, 145, 0)",
    border: '1px solid #FFF',
    borderRadius: 15,
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 4.5),
  },
}));

export default function ContentDisplay({children, media_type, id}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState("");
  const [director, setDirector] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const fetchData = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);

      setContent(data);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchTrailer = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);

    setVideo(data.results[0]?.key);
  };

 useEffect(() => {
     fetchData();
     fetchTrailer();
     fetchCredits();
     // eslint-disable-next-line
 }, []);
  const fetchCredits = async (id) => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
    );
    setCredits(data.crew);
    setDirector(data.crew.director);
   
  };


  return (
    <>
      <div type="button" onClick={handleOpen} style={{cursor: "pointer"}} color="inherit"
      >

        {children}
      </div>
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
        {content && (
          <div className={classes.paper}>
            <div className="ContentDisplay">
                <img
                  src={content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable}
                  alt={content.name || content.title}
                  className="ContentDisplay__portrait"
                />
                <img
                  src={content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape}
                  alt={content.name || content.title}
                  className="ContentDisplay__landscape"
                />
               <div className="ContentDisplay__about">
                  <span className="ContentDisplay__title">
                    <h6>{content.name || content.title}(
                     {(content.first_air_date ||
                      content.release_date
                    ).substring(0, 4)}
                    )</h6>
                  </span>
                    <span className = "vote">
                    Rating: {content.vote_average}/10</span>
            
                
                    <span className="ContentDisplay__description">
                     Overview : {content.overview}
                    </span>
                    <span className="cast">
                      Crew: {credits && (content.credits)}</span>
                    <Button 
                    variant="contained" startIcon={<YouTubeIcon />} color="secondary" target="_blank" href={`https://www.youtube.com/watch?v=${video}`}
                    > 
                    Watch the Trailer
                    </Button>
                </div>
            </div>
           </div> 
           )}  
        </Fade>
      </Modal>
    </>  
  );
}