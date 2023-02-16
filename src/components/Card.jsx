import { Link } from "react-router-dom";
import { IMAGE_URL_SM, IMG_PLACEHOLDER } from '../utils/index'

const Card = ({item, searchResult})=> {
    return (
        <Link to={`/${item?.title ? 'movie' : 'tv'}/${item?.id}`}>
            <div className={`w-44 text-center ${searchResult && 'shadow-white/50 shadow-sm'} rounded-md overflow-clip`}>
                <img className=" w-full rounded-md hover:brightness-75" src={item?.poster_path ? IMAGE_URL_SM + item?.poster_path : IMG_PLACEHOLDER} alt="" />
                {searchResult && <h1 className="text-white font-semibold p-2">{item?.title ? item?.title : item?.name}</h1>}
            </div>
        </Link>
    )
}

export default Card;