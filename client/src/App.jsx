import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {getAllCountries, getActivities} from "./Redux/actions"
import Landing from "./views/Landing/Landing"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import FormActivity from "./views/FormActivity/FormActivity"
import Details from "./views/Details/Detail"
import './App.css'


function App () {
  const dispatch=useDispatch()
  const {pathname}=useLocation()

  useEffect(()=>{
    dispatch(getAllCountries())
    dispatch(getActivities())
  },[])
  return (
    <div>
      {pathname!=="/"&& <Navbar/>}
      <Routes>
        <Route path={"/"} Component={Landing}/>
        <Route path={"/home"} Component={Home}/>
        <Route path={"/details/:id"} Component={Details}/>
        <Route path={"/createActivity"} Component={FormActivity}/>
      </Routes>
    </div>
  )
}

export default App
