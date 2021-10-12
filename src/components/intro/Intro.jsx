import "./Intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hola, mi nombre es: </h2>
                    <h1 className="i-name">LiBia Freites</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Developer Back End</div>
                            <div className="i-title-item">Developer Front End</div>
                            <div className="i-title-item">Developer Web</div>
                            <div className="i-title-item">Designer AI</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    Apasionada del Backend, indagadora del Frontend, entusiasta de las IT, pero sobre todo, aprendiz constantes y determinada...
                    </p>
                </div>
              
                
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                 <img src={Me} alt="" className="i-img" />
                </div>
          
        </div>
    )
}

export default Intro