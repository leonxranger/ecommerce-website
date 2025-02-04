
import Navbar from './navbar.jsx'
import Body from './body.jsx'	
import Slider from './slider.jsx'
import img1 from './assets/watch-images/img1.jpg';
import img3 from './assets/watch-images/img3.jpg';
import img4 from './assets/watch-images/img4.jpg';

import './App.css'

function App() {

  const Slides = [
    {url: img1, title: "The Classic Monarch"},
    {url: img3, title: "The Luxe Hybrid"},
    {url: img4, title: "The Opulent Steel"},
];


  return (
    <>
     <Navbar></Navbar>
     <Body></Body>

     <div className="containerSlide">

      <Slider Slides={Slides}> </Slider>
     </div>
     
   
    </>
  )
}

export default App
