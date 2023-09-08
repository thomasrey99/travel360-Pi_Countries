import {
    GET_COUNTRIES,
    GET_BY_ID_COUNTRY,
    CLEAR,
    ORDER,
    FILTER,
    GET_ACTIVITIES,
    POST_ACTIVITY_MESSAGE,
    SEARCH,
    PAGINATE
} 

from "./Action-Types"

import axios from "axios"

export const getAllCountries=()=>{
    return async(dispatch)=>{
        try {
            const response=(await axios("http://localhost:3001/countries")).data
            dispatch({
                type:GET_COUNTRIES,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}
export const getByIdCountry=(id)=>{
    return async(dispatch)=>{
        try {
            const response=(await axios(`http://localhost:3001/countries/${id}`)).data
            dispatch({
                type:GET_BY_ID_COUNTRY,
                payload:response
            })
        } catch (error) {
            throw new Error ({error:error.message})
        }
    }
}
export const getActivities=()=>{
    return async (dispatch)=>{
        try {
            const response=(await axios("http://localhost:3001/activities")).data
            dispatch({
                type:GET_ACTIVITIES,
                payload:response
            })
        } catch (error) {
            dispatch({
                type:GET_ACTIVITIES,
                payload:"No hay actividades disponibles"
            })
        }
    }
}
export const postActivity=(data)=>{
    return async(dispatch)=>{
        try {
            await axios.post(`http://localhost:3001/activities`, data)
            dispatch({
                type:POST_ACTIVITY_MESSAGE,
                payload:"Actividad creada con exito"
            })
        } catch (error) {
            dispatch({
                type:POST_ACTIVITY_MESSAGE,
                payload:"La actividad ya existe"
            })
        }
    }
}
export const filter=({continentFilter, activityFilter})=>{
    return{
        type:FILTER,
        payload:{continentFilter, activityFilter}
    }
}

export const clear=()=>{
    return {
        type:CLEAR
    }
}

export const order=(order)=>{
    console.log(order)
    return{
        type:ORDER,
        payload:order
    }
}
export const search=(name)=>{
    return async(dispatch)=>{
        try {
            const response=(await axios(`http://localhost:3001?name=${name}`)).data
            dispatch({
                type:SEARCH,
                payload:response
            })
        } catch (error) {
            throw new error("error al buscar por name")
        }
    }
}
export const paginate=(index)=>{
    return {
        type:PAGINATE,
        payload:index
    }
}