import { useInputContext } from '../context/StateProvider'

const Search = () => {

    const {input, setInput} = useInputContext();

    const handleInput = (e)=> {
        setInput(e.target.value)
    };

    return ( 
        <form className="w-full bg-gray-800 flex rounded-full overflow-clip">
            <input 
                type="text" 
                placeholder="Search movies or tv series..."
                className="p-3 flex-1 bg-transparent border-none outline-none text-white text-xl"
                value={input}
                onChange={handleInput}
            />
        </form>
     );
}
 
export default Search;