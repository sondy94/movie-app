import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";

//importing components
import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumbs from "./elements/MovieThumbs";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

function Home() {
  const [state, setState] = useState([]);

  return (
    <div>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumbs />
      <Spinner />
      <LoadMoreBtn />
    </div>
  );
}

export default Home;
