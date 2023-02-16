import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'

import { getDetailsUrl } from "../API";
import DetailContainer from "../components/DetailContainer";
import Loading from "../components/Loading";

const Movie = () => {

    const {id} = useParams()

    const [data, , isLoading] = useFetch(getDetailsUrl('movie', id))

    return ( 
        <div>
            {!isLoading && (<DetailContainer data={data} />)}
            {isLoading && <Loading />}
        </div>
     );
}
 
export default Movie;