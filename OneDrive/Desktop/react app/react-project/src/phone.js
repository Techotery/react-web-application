import React, { useEffect } from "react";
import { useState,useLayoutEffect } from "react";
import { useRef } from "react";

const PhoneComponent  = ({img,text,eff}) =>{

    const [Pos,setPos] = useState(0.0);
    const [effSpeed,setEffSpeed] = useState(0.011);
    const refRef = useRef(null);
    useEffect(() => {

        window.addEventListener('scroll', onScroll)
      
        return () => window.removeEventListener('scroll', onScroll)
      
      }, [Pos])
      const onScroll = ()=>{
        const topPos = refRef.current.getBoundingClientRect().top
        const scrollPos = (window.scrollY + window.innerHeight) - 100
     
        if(topPos < 30 || topPos > -30){
          //  setEffSpeed(0.02)
        }
        else{
           // setEffSpeed(0.01)
        }
        if (topPos < scrollPos && topPos > -150) {  
            //console.log("top Pos: " + topPos - 100)
            const newpostion = ((eff * 10) - ((scrollPos - topPos)) * (eff * effSpeed));
            console.log(topPos)
            setPos(newpostion);
            refRef.current.style.transform =  `translate(0%, ${Pos}%) translate3d(0px, 0px, 0px) scale(1.35, 1.35)`;
            //setoldscrollpos(scrollPos);
        }
        // else{
        //     refRef.current.style.transform =  `translate(0%, 0%) translate3d(0px, 0px, 0px) scale(1.35, 1.35)`;
        // }
      }
    return(
        <div className="SoloPhone">      
        <img className="phoneimg" style={{transform: `translate(0%, ${(eff * 10)}%) translate3d(0px, 0px, 0px) scale(1.35, 1.35)`}} src = {img} ref={refRef}/>
        <h4>{text}</h4>
        </div>
        )


}
export default PhoneComponent