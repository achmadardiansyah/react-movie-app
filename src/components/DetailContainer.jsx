import { Link } from "react-router-dom";

import { IMAGE_URL_LG, IMAGE_URL_SM } from "../utils";
import InfoBox from "./InfoBox";
import ActorFrame from '../components/ActorFrame';

const DetailContainer = ({data, tv})=> {

    return (
        <main className="text-white">
            <nav className="flex space-x-2 px-3 py-4 bg-gray-700">
                <Link to='/'>
                    Home
                </Link> 
                <span> | </span>
                <p className="text-yellow-300">{data?.title ? data?.title : data?.name}</p>
            </nav>

            <div style={{backgroundImage: `url(${IMAGE_URL_LG + data?.backdrop_path})`}} className="hidden lg:block h-[75vh] bg-center bg-cover bg-no-repeat relative">
                <div className=" absolute inset-0 bg-black/80 flex items-center px-3 space-x-5">
                    <img src={IMAGE_URL_SM + data?.poster_path} className=' w-60 rounded-md shadow-lg' alt="" />
                    <InfoBox data={data} tv={tv} />
                </div>
            </div>

            <div className="block lg:hidden">
                <div style={{backgroundImage: `url(${IMAGE_URL_LG + data?.backdrop_path})`}} className=' h-36 bg-center bg-cover'></div>
                <InfoBox data={data} tv={tv}/>
            </div>

            <div className="px-3">
                <h2 className="text-3xl my-3">Cast</h2>
            </div>

            <div className="gap-3 px-3 py-5">
                <div className="flex items-start space-x-5 py-3 overflow-x-auto scrollbar-thumb-red-500 scrollbar-thin">
                    {data?.credits?.cast?.map(cast => (
                        <ActorFrame key={cast.id} actorData={cast} />
                    ))}
                </div>
            </div>
        </main>
    )
};

export default DetailContainer;