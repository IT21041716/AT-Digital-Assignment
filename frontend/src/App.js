import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

/*componants*/ 
import Home from './componants/home';
import Header from './componants/header';
import Footer from './componants/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
