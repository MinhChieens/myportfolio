import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <>
       <Routes >
        <Route path='/' element= {<Layout></Layout>} >
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
       </Routes>
      </>
    </div>
  );
}

export default App;
