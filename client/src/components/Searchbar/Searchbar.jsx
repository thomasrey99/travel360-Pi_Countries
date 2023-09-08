import { useState } from "react"
import searchIcon from "./busqueda.png"
import { search} from "../../Redux/actions"
import "./Searchbar.css"
import { useDispatch } from "react-redux"
const Searchbar=()=>{
    const [data, setData]=useState("")
    const dispatch=useDispatch()
    const handleSearch=(event)=>{
        setData(event.target.value)
    }
    const searchName=(data)=>{
        dispatch(search(data))
        setData("")
    }
    return(
        <div className="searchbar-cont">
            <div className="search-bar">
                <input type='text' placeholder='Buscar por nombre' name="search" value={data} onChange={handleSearch}/>
                <button typeof="button" onClick={()=>searchName(data)}><img src={searchIcon}/></button>
            </div>
        </div>
    )
}

export default Searchbar