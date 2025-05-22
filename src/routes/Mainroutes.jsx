import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'



const MainRoutes = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipes />} />
            <Route path="/about" element={<About />} />      
        </Routes>
        </div>
    );
    }
export default MainRoutes;