import React, {useContext} from 'react';
import './Home.scss';
import yout from '../../assets/images/icono-youtube.png'
import aud from '../../assets/images/gold-coast.webp'
import StyleContext from "../../contexts/StyleContext";

const Home = () => {
    const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-menu container" :  "container"} >
        <div className='grid-home'>
            <div className='grid-home-1'>
                {/* <h2>Estudia y trabaja</h2> */}
            </div>
            <div className={isDark ? "dark-menu grid-home-2" :  "grid-home-2"}>
                <h1 className={isDark ? "text-decoration text-white" : "text-decoration"}>Estudia y trabaja<br/> en Australia</h1><br/>
                <span className={isDark ? "text-span text-white2" : "text-span"}>¡Te ayudamos a que tú también<br/> cumplas tus sueños en Australia!</span><br/>
                <a href="https://youtube.com" target="_blank" ><img src={yout} alt="" /></a>
                
            </div>

        </div>
        <div className="container2">
            <div className='container2-div'>
                <h2>TE AYUDAMOS A ESTUDIAR Y TRABAJAR EN GOLD COAST, AUSTRALIA</h2>
                <span>
                    Queremos que vivas con nosotros el sueño Australiano. Vivir, estudiar y trabajar en Australia es una de las mejores experiencias que puedes vivir! Tengas la edad que tengas y el nivel de inglés que tengas, puedes cumplir todos tus sueños en Gold Coast, Australia!<br/><br/>
                    Nosotros vinimos a Australia persiguiendo un sueño y a los primeros 3 meses de llegar hemos comprado una propiedad y abierto una compañía. Sea cual sea tu sueño, queremos ayudarte a que tú también lo cumplas. Nuestra misión es darte un asesoramiento GRATUITO en todo momento para ayudarte a que esta sea la mejor experiencia de tu vida!
                </span>
            </div>            
        </div>
        <div className="container3">
            <h2>siguiente seccion wey</h2>
            <img src={aud} alt="" />
        </div>
    </div>
  )
}

export default Home