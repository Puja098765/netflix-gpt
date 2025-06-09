import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";




const Browse= ()=>{
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

return(
    <div>
      <Header/>
      {showGptSearch ? (
        <GptSearch/>
      ) :(
         <>
         <MainContainer/>
      <SecondaryContainer/>
      </>
      )}
      {/* divide whole browsepage into 2 sections 
      1. main video section=> Main Container
                              -videobackground
                              -videoTitle
                        2.  => Secondary Container
                             -MovieList * n
                             -cards*n
      */}
    </div>
 );
};
export default Browse;