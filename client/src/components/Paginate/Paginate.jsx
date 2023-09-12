import "./Paginate.css"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { paginate } from "../../Redux/actions"
const Paginate=()=>{
const dispatch=useDispatch()
const position=useSelector((state)=>state.indexPage)
const pages=useSelector((state)=>state.totalPages)

let currentPage=position

const updateIndex=(event)=>{
    if(event.target.value==="<" && currentPage>0){
        currentPage=currentPage - 1
        dispatch(paginate(currentPage))
        return true
    }else if(event.target.value===">" && currentPage<pages - 1){
        currentPage= currentPage + 1
        dispatch(paginate(currentPage))
        return true
    }
}
console.log(pages)

return(
    <div className="paginate">
        <button value={"<"} onClick={updateIndex}>{"<"}</button>
        <div className="index">
            <p>{currentPage + 1}</p>
        </div>
        <button value={">"} onClick={updateIndex}>{">"}</button>
    </div>
)
}

export default Paginate