import Footer from "../../components/Footer/Footer"
import "./About.css"
const About=()=>{
    return (
        <>
            <main className="main-about">
                <h2 className="logo-title"><span className="tr">Tr</span><span className="av">av</span><span className="el">e</span><span className="grados"> 360°</span></h2>
                <div className="text-div">
                    <p>¿Te apasiona descubrir el mundo y aprender sobre nuevas culturas? Travel 360° es la herramienta definitiva para los amantes de los viajes y la exploración. Nuestra aplicación te lleva a un viaje alrededor del globo desde la comodidad de tu dispositivo móvil, ofreciéndote una experiencia única de conocimiento y aventura.
                    </p>
                    <p className="paragraph">Descubre el Mundo en un Solo Lugar</p>
                    <p>Travel 360° es mucho más que una simple aplicación de viajes. Es una enciclopedia de países en la palma de tu mano. Explora información detallada sobre más de 200 países, desde datos demográficos hasta datos históricos, culturales y geográficos. Obtén una visión completa de cada nación, su gente y su historia.</p>
                    <p className="paragraph"    >Diseña Tu Aventura Perfecta</p>
                    <p>Pero eso no es todo. En Travel 360°, no solo te sumergirás en la información, sino que también podrás diseñar tus propias aventuras. ¿Quieres explorar las maravillas naturales de un país, probar su deliciosa comida o sumergirte en su historia? Nuestra aplicación te permite planificar y agregar actividades turísticas a tus viajes de ensueño. Desde excursiones a museos y rutas gastronómicas hasta actividades al aire libre, tienes el control total para personalizar tus experiencias.</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default About