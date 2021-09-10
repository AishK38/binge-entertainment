import { Chip } from "@material-ui/core";
import axios from "axios";
import {useEffect} from "react";

const Genres = ({
selectGenres, setPage, setSelectGenres,type, genres, setGenres, }) => {
    const handleAdd = (genre) => {
        setSelectGenres([...selectGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    const fetchGenres = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`);

        setGenres(data.genres);
    };    
    useEffect(() => {
            fetchGenres();

            return () => {
                setGenres({});
            }; 
            // eslint-disable-next-line
    }, []);

    const handleRemove = (genre) => {
        setSelectGenres(
            selectGenres.filter((selected) => selected.id !== genre.id));
            setGenres([...genres, genre]);
            setPage(1);
        
    };
    
    return (
        <div style={{padding: "6px 0"}}>
            {selectGenres && selectGenres.map((genre)=> (
                <Chip label={genre.name} style={{margin: 5}} clickable size="small" key={genre.id} color= "primary" onDelete={() => handleRemove(genre)}/>
            ))}
            {genres && genres.map((genre)=> (
                <Chip label={genre.name} style={{margin: 5}} clickable size="small" key={genre.id} variant ="outlined" onClick={() => handleAdd(genre)} />
            ))}
        </div>
    );
};

export default Genres;
