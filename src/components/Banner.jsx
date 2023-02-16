import { Link } from 'react-router-dom';
import { IMAGE_URL_LG } from '../utils/index'

const Banner = ({banner}) => {
    return ( 
        <Link to={`/movie/${banner?.id}`}>
            <div className=' h-[80vh] rounded-md overflow-clip relative px-3 py-5'>
                <img src={IMAGE_URL_LG + banner?.backdrop_path} className='w-full h-full object-cover' alt="" />
                <div className=' absolute inset-0 bg-black/70 flex flex-col justify-end p-8 space-y-3'>
                    <h1 className='text-5xl font-semibold text-white'>{banner?.title}</h1>
                    <p className='text-gray-50 leading-normal'>
                        {banner?.overview}
                    </p>
                </div>
            </div>
        </Link>
     );
}
 
export default Banner;