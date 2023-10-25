import { NavLink, useParams } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import {getByIdCountry} from "../../Redux/actions"
import Footer from "../../components/Footer/Footer"
import "./Activities.css"
const Activities=()=>{

    const dispatch=useDispatch()

    const {id}=useParams()

    const country=useSelector((state)=>state.countryDetail)
    console.log(id)

    const fetchIdData=(id)=>{
        const response=dispatch(getByIdCountry(id))
        return response
    }
    useEffect(()=>{
        fetchIdData
    }, [country])

    

    return(
        <>
            <main className="main-activities">
            <NavLink to={`/details/${id}`} className="back"><span class="material-symbols-outlined">arrow_back</span></NavLink>
            {
                country.Activities.length!==0
                ?   
                    (
                        <>
                        <h2>Actividades en {country.name}</h2>
                        <div className="activities-cont">
                            {
                                    country.Activities.map(({name, duration, dificulty, season}, index)=>{
                                        return (
                                                <div key={index} className="activity-cont">
                                                    <h3>{name}</h3>
                                                    <p>Dificultad: {dificulty}</p>
                                                    <p>Duracion: {duration} hs</p>
                                                    <p>Temporada: {season}</p>
                                                </div>
                                        )
                                    })
                            }
                        </div>
                        </>
                    )
                    :
                    <h2>No hay actividades asociadas a este pais!</h2>
                }
            </main>
            <Footer/>
        </>
    )
}

export default Activities