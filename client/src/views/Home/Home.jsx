import "./Home.css"
import Cards from "../../components/Cards/Cards"
import Searchbar from "../../components/Searchbar/Searchbar"
import Loader from "../../components/Loader/Loader"
import Paginate from "../../components/Paginate/Paginate"
import FilterOrder from "../../components/Filter.Order/Filter-Order"
import {useSelector} from "react-redux"

export const Home=()=>{
    const allCountries=useSelector((state)=>state.allCountries)
    const allActivities=useSelector((state)=>state.allActivities)
    const pages=useSelector((state)=>state.totalPages)
    console.log(pages)
    return (
        <main className="main-home">
            <h2 className="home-title">Destinos turisticos</h2>
            <Searchbar/>
            <FilterOrder activities={allActivities}/>
            <Paginate/>
            {
            allCountries
            ?
            <Cards countries={allCountries}/>
            :
            <Loader/>
            }
            <Paginate/>
        </main>
    )
}

export default Home