import {img_300, unavailable} from "../../config/config";
import "./Content.css";
import { Badge } from "@material-ui/core";
import ContentDisplay from "../ContentDisplay/ContentDisplay";

const Content = ({
    id, poster, title, date, media_type, vote_average,
}) => {
    return(
        <ContentDisplay media_type={media_type}id={id}>
            <Badge badgeContent={vote_average} color={'primary'} />
            <img src= {poster? `${img_300}/${poster}` : unavailable} alt={title} 
            />
            <b className="title">{title}</b>
            <span classname="subtitle">{media_type=== "tv" ? "TV Show" : "Movie"}
            </span>
            <span className='subtitle'>Released on : {date}</span>
        </ContentDisplay>
    )    
};

export default Content;
