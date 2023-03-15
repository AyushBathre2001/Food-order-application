
import './App.css';
import Main from './component/Main';
import Menu from './component/Menu';
import Navbar from './component/Navbar';

import DishesState from './context/dishesState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ViewDish from './component/ViewDish';
import Signup from './component/Signup';
import Login from './component/Login';
import Cart from './component/Cart';
import Confirm from './component/Confirm';
import Done from './component/Done';

function App() {
  return (
    <>


      <Router>

        <DishesState>
          <Navbar />

          <Routes>
            <Route exact path='/' element={< Main />}></Route>
            <Route exact path='/menu' element={<Menu />}></Route>
            <Route exact path='/viewdish' element={<ViewDish />}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/cart' element={<Cart/>}></Route>
            <Route exact path='/confirm' element={<Confirm/>}></Route>
            <Route exact path='/done' element={<Done/>}></Route>

          </Routes>

      

        </DishesState>
      </Router>


    </>
  );
}

export default App;
