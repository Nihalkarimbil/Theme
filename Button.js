import React,{useState} from "react";

function Btn(){
    const [BackgroundClr,Setbackground]=useState("cyan")
    const bgcolor=()=>{
       Setbackground((oldclr)=>oldclr==="cyan"?"black":"cyan")
    }
    return(
        <div style={{backgroundColor:BackgroundClr,height:"800px"}}>
            <button onClick={bgcolor} id="Btn"><h2>"Switch Theme"</h2></button>
        </div>
    )
}
export default Btn