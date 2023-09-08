import "./CardDetail.css"
const CardDetail=({detail})=>{
    const {name, continent, capital, Activities, subregion, area, flag, population}=detail
    return (
        <section className="country-detail">
            <img src={flag}/>
            <div className="detail-body">
                <h2 className="detail-title">{name}</h2>
                <p className="description"><span className="description-name">Continente:</span> <span className="desc-property">{continent}</span></p>
                <p className="description"><span className="description-name">Capital:</span> <span className="desc-property">{capital}</span></p>
                <p className="description"><span className="description-name">Subregion:</span><span className="desc-property">{subregion}</span></p>
                <p className="description"><span className="description-name">Poblacion:</span> <span className="desc-property">{population}</span></p>
                <p className="description"><span className="description-name">Area:</span> <span className="desc-property">{area} Km/2</span></p>
            </div>
        </section>
    )
}

export default CardDetail