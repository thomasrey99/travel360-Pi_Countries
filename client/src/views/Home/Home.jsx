import "./Home.css"
import Cards from "../../components/Cards/Cards"
import Searchbar from "../../components/Searchbar/Searchbar"
import Loader from "../../components/Loader/Loader"
import Paginate from "../../components/Paginate/Paginate"
import FilterOrder from "../../components/Filter.Order/Filter-Order"
import {useSelector} from "react-redux"
import Footer from "../../components/Footer/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {getAllCountries, getActivities} from "../../Redux/actions"

export const Home=()=>{
    const allCountries=useSelector((state)=>state.allCountries)
    const allActivities=useSelector((state)=>state.allActivities)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllCountries())
        dispatch(getActivities())
    }, [])
    return (
            <>
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
                <Footer/>
            </>
    )
}

export default Home