import "./Activities.css"
import Activity from "../Activity/Activity"
const Activities=({activities})=>{
    return(
        <div className="activities-cont">
            <h2>Actividades disponibles</h2>
            <div className="div-activities">
            {
                activities.map(({name, duration, dificulty, season})=>{
                    return(
                        <Activity name={name} duration={duration} dificulty={dificulty} season={season}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Activities