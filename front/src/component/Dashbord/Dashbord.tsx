import React,{useState} from "react";
import Topbar from "../../comme/TopBar";
import Sidbarcustom from "../../comme/sidbarcustom";


const Dashbord = function(){
    const [sliderState, setsliderState] = useState(0);
    const modifSliderState = (value: number) => {
        setsliderState(value)
    }

    
    return(
        <>
            <Topbar changeSatateSlider={modifSliderState} numberOfSate={sliderState}/>
            <Sidbarcustom numberOfSate={sliderState} />
            <h1>My Dashbord</h1>
        </>
    )
}


export default Dashbord