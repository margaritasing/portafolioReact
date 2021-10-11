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
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            Passionate about Backend, frontend inquirer, IT enthusiast, but above all, constant and determined learner ...
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellendus distinctio repellat quo sequi odit, molestiae nostrum minima laboriosam facilis totam, tempore corrupti dolorum. Saepe excepturi odit vel aliquid officia!
            </p>
          
        </div>
       
    </div>
    )
}

export default About