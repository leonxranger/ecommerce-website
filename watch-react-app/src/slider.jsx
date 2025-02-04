import { useState } from "react";
import {useEffect} from "react";
import React from "react";
import "./slider.css";


const Slider= ({Slides}) => {

    
    const [currentIndex,setCurrentIndex] = useState(0);
    const[isHovering,setIshovering]=useState(false);

    const handelscroll = (event) =>{

        if (!isHovering) return;
        event.preventDefault();


        if (event.deltaY > 0){
            setCurrentIndex((currentslide) =>{
                if (currentslide === Slides.length -1){
                    return 0;
                }
                else{
                    return(currentslide + 1)
                }  
            }    
        );
        }
        else{
            setCurrentIndex((currentslide ) => {
                if (currentslide === 0){
                    return Slides.length -1
                }
                else{
                    return currentslide -1
                }

            }
        );

        }

    }

    const el = document.querySelector("div")
        
    useEffect(() => {
        el.addEventListener('wheel', handelscroll, { passive: false });
        return () => {
          el.removeEventListener('wheel', handelscroll);
        };
      }, [isHovering]);
        

    
  return(
        <>
        <div style={{backgroundImage:`url(${Slides[currentIndex].url})`}} className="slider" onMouseEnter={() => setIshovering(true)} onMouseLeave={()=>setIshovering(false)}>
        
        
           
        </div>

        

        </>

        
    )
}
    


export default Slider;