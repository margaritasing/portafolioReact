import "./About.css"
import Urban from "../../img/img1.jpg"



const About = () => {
    return ( 
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Urban}
                alt=""
                className="a-img" 
                />
            </div>
        </div>
        
        <div className="a-right">
            <h1 className="a-title">Un Poco De Mi</h1>
            <p className="a-sub">
                Tengo experiencia con Java desarrollando ApiRest, con Spring, Spring Boot, Spring Security, Spring Data Jpa, Hibernate, Maven, hice proyectos con Jira,Bitbucket,Git, Jwt, Swagger AWSS3, Patron DTO,  bajo la metodología Scrum,tengo experiencia en el uso de Microservicios, así como, GitFlow, del lado del Front, tuve la oportunidad de  desarrollar en Javascript, Typescript, Html, Css, utilice Angular y Vue.js,
            </p>
            <p className="a-desc">
                En cuanto a bases de datos, desarrolle con Mysql, Mongodb y Firebase, pienso que podría aportar efectividad y eficiencia dentro del equipo de trabajo, ya que, soy una mujer determinada y constante, siempre encaminada al logro de los objetivos;
                Espero formar parte de un buen equipo, donde se valore el aprendizaje continuo, la eficiencia y eficacia, sobre todo con buen clima laboral.
            </p>
          
        </div>
       
    </div>
    )
}

export default About