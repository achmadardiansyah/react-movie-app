import { useState } from "react";
import { fetchUrl } from "../API";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

import { options } from '../utils/index'

const Genres = () => {

    const [selectedOption, setSelectedOption] = useState('popular')
    const [page, setPage] = useState(1)


    const dep = [selectedOption, page]
    const [data, totalPages] = useFetch(fetchUrl('movie', selectedOption, page), dep)

    console.log(data?.results)

    return ( 
        <div className="px-3 py-2">
            <select className="p-2 text-xl my-3 outline-none rounded-sm bg-gray-700 text-yellow-50" value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {options.map(opt => (
                    <option value={opt.name}>{opt.name}</option>
                ))}
            </select>

            <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 justify-items-stretch">
                {data?.results?.map(item => (
                    <Card item={item} />
                ))}
            </div>

            <div className="text-white flex w-full items-center justify-center space-x-3 my-5">
                <button disabled={page === 1 ? true : false} onClick={()=> setPage(prev => prev - 1)}  className="page-btn">-</button>
                <span>{page}</span>
                <button disabled={page === totalPages ? true : false} onClick={()=> setPage(prev => prev + 1)}  className="page-btn">+</button>
            </div>
        </div>
     );
}
 
export default Genres;