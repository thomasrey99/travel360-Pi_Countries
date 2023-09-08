import "./Paginate.css"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { paginate } from "../../Redux/actions"
const Paginate=()=>{
const dispatch=useDispatch()
const position=useSelector((state)=>state.indexPage)
const pages=useSelector((state)=>state.totalPages)
const [index, setIndex]=useState([])
const totalPages=()=>{
    const index_Pages=[]
    for(let i=0;i<pages;i++){
        index_Pages.push(i)
    }
    setIndex(index_Pages)
}
useEffect(()=>{
    totalPages()
}, [pages])

return(
    <ul className="paginate">
        {
            index.map((index_page)=>{
                return(
                    
                    <li value={index_page} key={index_page} onClick={()=>dispatch(paginate(index_page))} className={index_page===position ? "page": ""}>{index_page + 1}</li>
                )
            })
        }
    </ul>
)
}

export default Paginate