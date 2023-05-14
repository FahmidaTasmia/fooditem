
import './App.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Home from './Component/Home/Home';
import { useEffect } from 'react';
import Header from './Component/Header/Header';

function App() {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <div className="App bg-[#F1F4ED]">
      <Header></Header>
    <Home></Home>
    </div>
  );
}

export default App;
