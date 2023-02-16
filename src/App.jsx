import {Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Movie from '../src/pages/Movie';
import Tv from './pages/Tv';

const App = () => {
  return ( 
    <div className='bg-black'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/tv/:id' element={<Tv />} />
        </Routes>
      </div>
    </div>
   );
}
 
export default App;