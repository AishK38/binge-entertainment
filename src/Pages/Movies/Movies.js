import axios from "axios";
import {useState, useEffect} from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Content from "../../components/Content/Content";
import Genres from "../../components/Genres";
import useGenrehook from "../../hooks/useGenrehook";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numofpages, setNumOfPages] = useState();
  const [selectGenres, setSelectGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenrehook(selectGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

    setContent(data.results);
    setNumOfPages(data.total_pages);
  };  

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);
  return (
        <div>
          <span className="pageTitle">Movies</span>
          <Genres type="movie" selectGenres = {selectGenres} genres={genres} setGenres={setGenres} setSelectGenres={setSelectGenres} setPage={setPage}/>
          <div className="trendingstuff">
            {content &&
              content.map((c) => (
                <Content
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type="movie"
                  vote_average={c.vote_average}
                />
              ))}
          </div>
          {numofpages > 1 && (
          <CustomPagination setPage={setPage} numofpages={numofpages} />
          )}
        </div>
  );
};

export default Movies;