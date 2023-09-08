import "./Cards.css"
import Card from "../Card/Card"
import Loader from "../Loader/Loader"
const Cards=({countries})=>{
    return(
        <section className="cards-cont">
            {
                countries
                ?
                countries.map(({id, name, flag, continent})=>{
                    return(
                        <Card key={id} id={id} name={name} flag={flag} continent={continent}/>
                    )
                })
                :
                <Loader/>
            }
        </section>
    )
}

export default Cards