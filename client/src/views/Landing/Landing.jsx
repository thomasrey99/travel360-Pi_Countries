import {NavLink} from "react-router-dom"
import {useDispatch, useSelector}from "react-redux"
import {getAllCountries} from "../../Redux/actions"
import { useEffect } from "react"
import "./Landing.css"
const Landing=()=>{
    const allCountries=useSelector((state)=>state.allCountries)

    const consologuear=()=>{
        console.log(allCountries)
    }
    consologuear()
    return (
        <main className="main-landing">
            <div className="landing-cont">
                <h1 className="logo-title" id="title-landing"><span className="tr">Tr</span><span className="av">av</span><span className="el">el</span><span className="grados"> 360°</span></h1>
                <div className="landing-button">
                    <NavLink to={"/home"} className="enter">Ingresar</NavLink>
                </div>
            </div>
        </main>
    )
}

export default Landing