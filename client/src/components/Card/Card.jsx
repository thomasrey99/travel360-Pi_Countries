import "./Card.css"
import {NavLink} from "react-router-dom"
const Card=({name, id, continent, flag})=>{
    return (
        <div className="card-cont">
            <img src={flag}/>
            <div className="card-body">
                <h2>{name}</h2>
                <p>{continent}</p>
                <NavLink to={`/details/${id}`} className="link-detail">Ver mas</NavLink>
            </div>
        </div>
    )
}

export default Card