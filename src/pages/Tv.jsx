import { useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch'

import { getDetailsUrl } from "../API";
import DetailContainer from "../components/DetailContainer";
import Loading from "../components/Loading";

const Tv = () => {

    const {id} = useParams()

    const [data, , isLoading] = useFetch(getDetailsUrl('tv', id))

    console.log(data)

    return ( 
        <div>
            {!isLoading && (<DetailContainer data={data} tv />)}
            {isLoading && <Loading />}
        </div>
     );
}
 
export default Tv;