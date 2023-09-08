import search from "./busqueda.png"
import "./Searchbar.css"
const Searchbar=()=>{
    
    return(
        <div className="searchbar-cont">
            <div className="search-bar">
                <input type='text' placeholder='Buscar por nombre' name="search"/>
                <button typeof="button"><img src={search}/></button>
            </div>
        </div>
    )
}

export default Searchbar