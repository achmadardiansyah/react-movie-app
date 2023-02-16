import YouTube from 'react-youtube';
import { IMAGE_URL_SM } from "../utils";
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const InfoBox = ({data, tv})=> {

    const [playVideo, setPlayVideo] = useState(false)

    const release_year = data?.release_date ? data?.release_date.split('-')[0] : data?.first_air_date.split('-')[0];
    const last_year = tv && data?.last_air_date?.split('-')[0];
    const rating = Math.round(data?.vote_average);
    const director = data?.credits?.crew?.find(crew => crew.job === 'Director');
    const trailer = data?.videos?.results?.find(result => result.type === 'Trailer')

    const setRatingBg = ()=> {

        if (rating >= 8) {
            return '#2B7A0B'
        } else if (rating >= 7 && rating < 8) {
            return '#8ACE23'
        } else if (rating >= 5 && rating < 7) {
            return '#EF5B0C'
        } else {
            return '#990000'
        }
        
    }

    return (
        <div className="h-full flex flex-col justify-center items-center lg:items-start lg:p-0 p-3 text-center lg:text-start lg:bg-transparent bg-gray-800">
            <div className="lg:text-4xl text-xl font-bold lg:flex lg:space-x-5 space-x-1">
                <h1>{data?.title ? data?.title : data?.name }</h1>
                <h1 className="text-gray-200 text-sm lg:text-4xl">{`(${tv && release_year !== last_year ? release_year + '-' + last_year : release_year})`}</h1>
            </div>
            <img src={IMAGE_URL_SM + data?.poster_path} className='w-28 mt-2 shadow-md rounded-md block lg:hidden' alt="" />
            <p className="italic mb-2 my-2">{data?.tagline}</p>
            <p className="text-lg text-gray-100">
                {data?.overview}
            </p>
            <div className="flex gap-3 my-3">
                {data?.genres?.map(genre => (
                    <p key={genre.id} className='p-2 bg-orange-600 rounded-lg text-xs font-semibold'>
                        {genre.name}
                    </p>
                ))}
            </div>
            <div style={{backgroundColor: setRatingBg()}} className="flex flex-col px-5 py-2 justify-center items-center rounded-xl">
                <span className="text-xs">Rate</span>
                <span className="text-xl font-bold">{rating}</span>
            </div>
            {!tv && (
                <div className="text-xl font-semibold mt-2">
                    <span>Director : </span>
                    <span>{director?.name}</span>
                </div>
            )}

            <button onClick={()=>setPlayVideo(true)} className='flex items-center space-x-2 bg-red-700 py-1 px-3 rounded-lg my-3' >
                <PlayIcon className='h-5' />
                <p>Watch Trailer</p>
            </button>

            {playVideo && (
                <div className='fixed inset-0 flex justify-center items-center bg-black/80'>
                    <YouTube videoId={trailer.key} />
                    <button onClick={()=>setPlayVideo(false)} className='absolute right-3 top-5 bg-gray-800/30 rounded-full p-2'>
                        <XMarkIcon className='h-10' />
                    </button>
                </div>
            )}
        </div>
    )
}

export default InfoBox;