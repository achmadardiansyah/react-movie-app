import { fetchUrl, searchUrl } from '../API';
import Banner from '../components/Banner';
import Genres from '../components/Genres';
import Search from '../components/Search';

import useFetch from '../hooks/useFetch';
import { useInputContext } from '../context/StateProvider'
import Card from '../components/Card';
import Loading from '../components/Loading';

const Home = () => {

    const { input } = useInputContext();

    const [bannerData] = useFetch(fetchUrl('movie', 'now_playing', 1));

    const [searchResults, , isLoading, isNotFound] = useFetch(searchUrl(input, 1), [input]);

    const banner = bannerData?.results?.[Math.round(Math.random()*bannerData?.results?.length)];

    return ( 
        <div className=''>
            {!input && (<Banner banner={banner} />)}
            <div className='w-full p-3 bg-gray-900 sticky top-0 z-20'>
                <Search />
            </div>
            { input ? (
                <div>
                    {!isLoading && (
                         <div>
                            <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 justify-items-stretch px-3 py-5">
                                {searchResults?.results?.map(result => (
                                    <Card key={result.id} searchResult item={result} />
                                ))}
                            </div>

                            <div className='w-full h-[50vh] flex justify-center items-center'>
                                {isNotFound && (<div className='text-3xl font-bold text-white text-center'>Not Found!</div>)}
                            </div>
                        </div>
                    )}

                    {isLoading && (<Loading />)}
                </div>
            ) : (
                <Genres />
            )}
        </div>
     );
}
 
export default Home;