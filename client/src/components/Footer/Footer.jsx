import "./Footer.css"
import instagram from "../../assets/img/instagram.png"
import facebook from "../../assets/img/facebook.png"
import github from "../../assets/img/github.png"
import whatsapp from "../../assets/img/whatsapp.png"
const Footer=()=>{
    return (
        <footer className="footer">
            <div className="redes-cont">
                <a href="https://www.instagram.com/thomas_leonel_rey/" target="_blank" rel="noopener noreferrer"><img src={instagram}/></a>
                <a href="https://www.facebook.com/thomas.rey.942" target="_blank" rel="noopener noreferrer"><img src={facebook}/></a>
                <a href="https://github.com/thomasrey99" target="_blank" rel="noopener noreferrer"><img src={github}/></a>
                <a href="https://wa.me/1122527718" target="_blank" rel="noopener noreferrer"><img src={whatsapp}/></a>
                
            </div>
            <p className="copyrigth">© Thomas Rey, all rigths reserved</p>
        </footer>
    )
}

export default Footer