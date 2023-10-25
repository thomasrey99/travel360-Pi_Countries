import "./Detail.css"
import CardActivities from "../../components/ActivitiesCard/CardActivities"
import {getByIdCountry} from "../../Redux/actions"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import {useParams, NavLink} from "react-router-dom"
 const Details=()=>{
    const {id}=useParams()
    const detail=useSelector((state)=>state.countryDetail)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getByIdCountry(id))
    }, [])

    return (
        <main className="main-detail">
            <div className="country-info">
                <div className="info-card">
                    <img src={detail.flag}/>
                    <h2>{detail.name}</h2>
                    <p>{detail.id}</p>
                    <p><span className="description">Continente:</span> {detail.continent}</p>
                    <p><span className="description">Subregion</span>: {detail.subregion ==="undefined"?"No posee":detail.subregion}</p>
                    <p><span className="description">Capital</span>: {detail.capital}</p>
                    <p><span className="description">Poblacion:</span> {detail.population}</p>
                    <p><span className="description">Area:</span> {detail.area} Km/2</p>
                    <NavLink to={`/activities/${id}`} className="activities-button">Actividades</NavLink>
                </div>
            </div>
        </main>
    )
}

export default Details