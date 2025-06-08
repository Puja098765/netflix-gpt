import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse= ()=>{
  useNowPlayingMovies();
  usePopularMovies();

return(
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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