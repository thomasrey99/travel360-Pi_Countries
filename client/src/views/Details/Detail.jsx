import "./Detail.css"
import Activities from "../../components/Activities/Activities"
import {getByIdCountry} from "../../Redux/actions"
import {useDispatch, useSelector} from "react-redux"
import CardDetail from "../../components/CardDetail/CardDetail"
import { useEffect } from "react"
import {useParams, NavLink} from "react-router-dom"
 const Details=()=>{
    const {id}=useParams()
    const detail=useSelector((state)=>state.countryDetail)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getByIdCountry(id))
    }, [])
    console.log(detail)
    return (
        <main className="main-detail">
            <NavLink to={"/home"} className="link-back"><span className="material-symbols-outlined" id="back-icon">arrow_back</span>Volver</NavLink>
            <CardDetail detail={detail}/>
            {
                !detail.Activities
                ?
                <p>No existen actividades relacionadas a este pais</p>
                :
                <Activities activities={detail.Activities}/>
            }
        </main>
    )
}

export default Details