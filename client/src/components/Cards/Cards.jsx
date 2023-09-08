import "./Cards.css"
import Card from "../Card/Card"
import Loader from "../Loader/Loader"
const Cards=({countries})=>{
    console.log(countries)
    return(
        
        <section className="cards-cont">
            {
                countries.length>0
                ?
                countries.map(({id, name, flag, continent})=>{
                    return(
                        <Card key={id} id={id} name={name} flag={flag} continent={continent}/>
                    )
                })
                :
                <h2 className="no-exist">No existen coincidencias</h2>
            }
        </section>
    )
}

export default Cards