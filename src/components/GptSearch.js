import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
const GptSearch =()=>{
    return(
    <div>
    <div className="absolute w-full -z-10">
    <img
    className="w-full"
    src={BG_URL}
    alt ="logo"
 />
 </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    );
}
export default GptSearch;