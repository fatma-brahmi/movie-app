import "./App.css";
import { useState } from "react";
import Movie from "./components/Movie";
import { Form, FormControl } from "react-bootstrap";
import AddModal from "./components/AddModal";
import ReactStars from "react-rating-stars-component";

function App() {
  const [movie, setmovie] = useState([
    {
      Title: "Parasite",
      Poster:
        "https://static.cinebel.be/img/movie/poster/full/1020491_fr_parasite_1563531796112.jpg",
      Year: 2019,
      rating: 4,
    },
    {
      Title: "Interstellar",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
      Year: 2014,
      rating: 4,
    },
    {
      Title: "Palma",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIvBK5i8Gz1VkSZrMQvi_5x4FQh0yIzoWgg&usqp=CAU",
      Year: 2019,
      rating: 3,
    },

    {
      Title: " Avater",
      Year: "2021",
      imdbID: "tt2488496",
      Type: "movie",
      Poster:
        "data:image/jpeg;base64,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",
      rating: 5,
    },
    {
      rating: 3,
      Title: " Attack of the Clones",
      Year: "2021",
      imdbID: "tt0121765",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },

    {
      rating: 5,
      Title: " The Rise of Skywalker",
      Year: "2019",
      imdbID: "tt2527338",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    },
  ]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [textFilter, setTextFilter] = useState("");

  const addMovie = (newMovie) => {
    setmovie([...movie, newMovie]);
  };

  const ratingChanged = (newRating) => {
    setRatingFilter(newRating);
    console.log(ratingFilter);
  };

  const handleChange = (e) => {
    setTextFilter(e.target.value);
  };

  return (
    <div className="App">
      <div className="search">
        <div className="top">
          <p>BATTYWOOD</p>
          <div className="btn">
            <AddModal addMovie={addMovie} movie={movie} />
          </div>
        </div>

        <div>
          <div className="my-search">
            <Form className="search-in">
              <div>
                <FormControl
                  type="search"
                  placeholder="Taper your search"
                  className=""
                  aria-label="Search"
                  onChange={handleChange}
                />

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
              
            </Form>
          </div>
        </div>

        <div>
          <Movie
            ratingChanged={ratingChanged}
            movie={movie.filter(
              (el) =>
                el.Title.toLowerCase().includes(
                  textFilter.toLowerCase().trim()
                ) && el.rating >= ratingFilter
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
