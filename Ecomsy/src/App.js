import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navigation from './components/Navigation'
import Example from './components/Example'
import  { Toaster } from 'react-hot-toast';
import {useState} from 'react'
import Login from './components/login'
import View from './components/view'

const App = () => {

    const [content,setContent] = useState([]);
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path='/' element = {<Home setContent={setContent} />} />
                <Route path='/cart' element = {<Cart content={content}/>} />
                <Route path='/view' element={<View />} /> 
                <Route path='/login' element = {<Login/>} />
            </Routes>
            <Toaster/>
            {/* <Example /> */}
        </div>
    )
  };
  
  export default App;