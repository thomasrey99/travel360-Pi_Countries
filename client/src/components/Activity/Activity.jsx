import "./Activity.css"
const Activity=({name, duration, dificulty, season})=>{
    return(
        <div className="activity-cont">
            <div className="name-activity">
                <h3>{name}</h3>
            </div>
            <div className="activity-info">
                <p><span>dificultad:</span> {dificulty}</p>
                <p><span>Duracion:</span> {duration} hs</p>
                <p><span>Temporada:</span> {season}</p>
            </div>
        </div>
    )
}

export default Activity