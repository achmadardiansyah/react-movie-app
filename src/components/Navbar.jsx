import { Link } from 'react-router-dom';
import LogoImg from '../assets/popcorn.png'

const Navbar = () => {

    return ( 
        <nav className='bg-gray-900 px-3 py-2 flex'>
            <Link to='/'>
                <div className='flex items-center space-x-2 w-fit'>
                    <img src={LogoImg} className=' w-14' alt="" />
                    <h1 className='text-3xl text-white font-semibold'>Watch Me</h1>
                </div>
            </Link>
        </nav>
     );
}
 
export default Navbar;