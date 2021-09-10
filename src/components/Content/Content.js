import {img_300, unavailable} from "../../config/config";
import "./Content.css";
import { Badge } from "@material-ui/core";

const Content = ({
    id, poster, title, date, media_type, vote_average,
}) => {
    return(
        <div className="media">
            <Badge badgeContent={vote_average} color={'primary'} />
            <img src= {poster? `${img_300}/${poster}` : unavailable} alt={title} 
            />
            <b className="title">{title}</b>
            <span classname="subtitle">{media_type=== "tv" ? "TV Show" : "Movie"}
            </span>
            <span className='subtitle'>Released on : {date}</span>
        </div>
    )    
};

export default Content;
