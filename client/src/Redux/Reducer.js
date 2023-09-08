import {
    GET_COUNTRIES,
    CLEAR,
    ORDER,
    FILTER,
    SEARCH,
    PAGINATE,
    GET_ACTIVITIES,
    GET_BY_ID_COUNTRY,
    POST_ACTIVITY_MESSAGE} from "./Action-Types"

let initialState = {
    allCountries: [],
    allCountriesStore: [],
    allCountriesBackup: [],
    allActivities: [],
    countryDetail: [],
    items: 10,
    message: "",
    totalPages: null,
    indexPage: 0,
}
const calculatePages=(total, items)=>{
    const remainder=total%items
    if(total<items){
        return 0
    }else if(remainder!==0){
        return Math.ceil(total/items)
    }else{
        return total/items
    }
}

const Reducer=(state=initialState, {type, payload})=>{
    switch(type){
        case GET_COUNTRIES:
            const pages=calculatePages(payload.length, state.items)
            const lastIndex=0*state.items + state.items
            return{
                ...state,
                allCountries:payload.slice(0, lastIndex),
                allCountriesBackup:payload,
                allCountriesStore:payload,
                totalPages:pages
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                allActivities:payload
            }
        case GET_BY_ID_COUNTRY:
            return {
                ...state,
                countryDetail:payload
            }
        case POST_ACTIVITY_MESSAGE:
            return {
                ...state,
                message:payload
            }
        case ORDER:
            if(payload==="a-z"){
                return{
                    ...state,
                    allCountries:[...state.allCountriesStore].sort((a, b)=>a.name.localeCompare(b.name)).slice(0, state.items),
                    allCountriesStore:[...state.allCountriesStore].sort((a, b)=>a.name.localeCompare(b.name)),
                    indexPage:0

                }
            }else if(payload==="z-a"){
                return {
                    ...state,
                    allCountries:[...state.allCountriesStore].sort((a, b)=>b.name.localeCompare(a.name)).slice(0, state.items),
                    allCountriesStore:[...state.allCountriesStore].sort((a, b)=>b.name.localeCompare(a.name)),
                    indexPage:0
                }
            }else{
                return{
                    ...state,
                    allCountries:[...state.allCountriesStore].sort((a, b)=>b.population - a.population).slice(0, state.items),
                    allCountriesStore:[...state.allCountriesStore].sort((a, b)=>b.population - a.population),
                    indexPage:0
                }
            }
        case FILTER:
            const {continentFilter, activityFilter}=payload
            const countriesCopyFilter=[...state.allCountriesBackup]
            const countrysFilter=[]
            if(continentFilter && activityFilter){
                const countryByContinent=countriesCopyFilter.filter((country)=>country.continent===continentFilter)
                for (let country of countryByContinent){
                    country.Activities.forEach((activitie)=>{
                        if(activitie.name===activityFilter){
                            countrysFilter.push(country)
                        }
                    })
                }
                const pages=calculatePages(countrysFilter.length, state.items)

                return{
                    ...state,
                    allCountries:countrysFilter.slice(0, state.items),
                    allCountriesStore:countrysFilter,
                    totalPages:pages,
                    indexPage:0
                }
            } else if(continentFilter){
                const countriesByContinent=[...state.allCountriesBackup].filter((country)=>{
                    return country.continent===continentFilter
                })
                const pages=calculatePages(countriesByContinent.length, state.items)
                return {
                    ...state,
                    allCountries:countriesByContinent.slice(0, state.items),
                    allCountriesStore:countriesByContinent,
                    totalPages:pages,
                    indexPage:0
                }
            }else if(activityFilter){
                const countriesByActivity=[]
                const countriesCopy=[...state.allCountriesBackup]
                for (let country of countriesCopy){
                    country.Activities.forEach((activitie)=>{
                        if(activitie.name===activityFilter){
                            countriesByActivity.push(country)
                        }
                    })
                }
                const pages=calculatePages(countriesByActivity.length, state.items)
                return {
                    ...state,
                    allCountries:countriesByActivity.slice(0, state.items),
                    totalPages:pages,
                    indexPage:0,
                    allCountriesStore:countriesByActivity
                }
            }else{
                const pages=calculatePages(countriesCopyFilter.length, state.items)
                return{
                    ...state,
                    allCountries:[...countriesCopyFilter].slice(0, state.items),
                    allCountriesStore:[...countriesCopyFilter],
                    indexPage:0,
                    totalPages:pages
                }
            }
        case PAGINATE:
            const countriesCopyPaginate=[...state.allCountriesStore]
            return{
                ...state,
                allCountries:countriesCopyPaginate.slice(payload*state.items, payload*state.items + state.items),
                indexPage:payload
            }
        case SEARCH:
            const Pages=calculatePages(payload.length, state.items)
            return{
                ...state,
                allCountries:[...payload].slice(0, state.items),
                allCountriesStore:payload,
                indexPage:0,
                totalPages:Pages
            }
        default:
            return {...state}
    }
}

export default Reducer