import {img_300, unavailable} from "../../config/config";
import "./Content.css";
import { Badge } from "@material-ui/core";
import ContentDisplay from "../ContentDisplay/ContentDisplay";

const Content = ({
    id, poster, title, date, media_type, vote_average,
   }) => {
     return(
      <>   
        <ContentDisplay media_type={media_type}id={id}>
         <div className="media">
            <Badge badgeContent={vote_average} color={'primary'} />
            <img src= {poster? `${img_300}/${poster}` : unavailable} alt={title} className="poster"
            />
            <b className="title">{title}</b>
            <span classname="subTitle" style={{fontSize: "12px"}}>{media_type=== "tv" ? "TV Show" : "Movie"}
            </span>
            <span className='subTitle'>Released on : {date}</span>
         </div> 
        </ContentDisplay>
      </> 
    ) ;   
};

export default Content;
