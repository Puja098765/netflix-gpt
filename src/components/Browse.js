import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse= ()=>{
  useNowPlayingMovies();

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