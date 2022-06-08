import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Header } from './components/Header/Header';
import { SaveLater } from './pages/SaveLater';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
       <Route path="/" element={<Products/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
       <Route path="/savelater" element={<SaveLater/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
